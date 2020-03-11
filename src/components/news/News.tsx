import * as React from "react";
import autobind from "autobind-decorator";
import { Query } from "react-apollo";
import { ApolloError } from "apollo-boost";
import gql from "graphql-tag";
import styles from "./News.module.scss";
import "./News.scss";
import { Button } from "antd";
import moment from "moment";
import 'moment/locale/ru';
import NewsModal from "./NewsModal";

const GET_NEWS = gql`
    query {
        allNews(orderBy: NEWS_DATE_DESC) {
            nodes {
                id
                title
                fullText
                newsDate
                newsImg
            }
        }
    }
`;

class News extends React.Component<{}, {
    activeModal?: number
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeModal: 0
        }
    }

    @autobind
    private showModal(id: number) {
        this.setState({activeModal: id});
    };

    @autobind
    private handleCancel() {
        this.setState({activeModal: 0});
    };

    public render(): React.ReactNode {
        return (
            <Query query={GET_NEWS}>
                {({loading, error, data}: {loading: boolean, error?: ApolloError, data: any}) => {
                    if (loading) return <span>"Загрузка новостей...";</span>
                    if (error) return <span>`Ошибка! ${error.message}`</span>;
                    console.log(data);
                    return (
                        <div className={styles.pageNews}>
                            {data.allNews.nodes.map((newsQuery: any) => (
                                <div>
                                    <Button type="primary" key={newsQuery.id} className={"newsButton"} onClick={() => this.showModal(newsQuery.id)}>
                                        <img className={styles.newsImg} src={newsQuery.newsImg} alt=""/>
                                        <span className={styles.newsDate}>{moment(newsQuery.newsDate).format("DD.MM.YYYY - dddd")}</span>
                                        <span className={styles.newsTitle}>{newsQuery.title}</span>
                                    </Button>
                                    <NewsModal news={newsQuery} isVisible={newsQuery.id === this.state.activeModal} onClose={this.handleCancel}/>
                                </div>
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default News;