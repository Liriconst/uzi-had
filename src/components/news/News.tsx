import * as React from "react";
import autobind from "autobind-decorator";
import {Router, Switch, Route, Link} from "react-router-dom";
import { Query } from "react-apollo";
import { ApolloError } from "apollo-boost";
import gql from "graphql-tag";
import styles from "./News.module.scss";
import "./News.scss";
import { Button, Modal } from "antd";
import moment from "moment";
import WrappedNewsAdd from "./NewsAdd";

const GET_NEWS = gql`
    query AddNews {
        allNews(orderBy: NEWS_DATE_DESC) {
            nodes {
                id
                title
                newsDate
                fullText
                imgLink
            }
        }
    }
`;

class News extends React.Component<{}, {
    mode?: string,
    visible?: boolean,
    visible2?: boolean
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            mode: 'all',
            visible: false,
            visible2: false
        }
    }

    @autobind
    private showModal() {
        this.setState({visible: true});
    };

    @autobind
    private handleCancel() {
        this.setState({visible: false});
    };

    public render(): React.ReactNode {
        return (
            <Query query={GET_NEWS}>
                {({loading, error, data}: {loading: boolean, error?: ApolloError, data: any}) => {
                    if (loading) return <span>"Loading...";</span>
                    if (error) return <span>`Error! ${error.message}`</span>;
                    console.log(data);
                    return (
                        <div className={styles.containerMain}>
                            {data.allNews.nodes.map((newsQuery: any) => (
                                <Button type="primary" key={newsQuery.id} className={"box"}>
                                    <img className={styles.spancolor} src={newsQuery.imgLink} alt=""/>
                                    <span className={styles.spantext}>{newsQuery.title}</span>
                                    {/*<span>от&nbsp;</span>*/}
                                    {/*<span>{moment(newsQuery.newsDate).format("DD.MM.YYYY hh:mm:ss")}</span>*/}
                                </Button>
                            ))}
                            <Modal
                                title="Ваш отзыв"
                                visible={this.state.visible}
                                onCancel={this.handleCancel}
                                wrapClassName="newsWrap"
                            >
                                <WrappedNewsAdd onCancel={this.handleCancel}/>
                            </Modal>
                        </div>
                    );
                }}
            </Query>
            // <div className={styles.pageNews}>
            //     <div className={styles.newsBlock}>
            //         <div className={styles.newsTime}>
            //             <span className={styles.newsTimeText}>26.11</span>
            //             <span className={styles.newsTimeText}>2019</span>
            //         </div>
            //         <div className={styles.newsMain}>
            //             <span className={styles.newsHeader}>НОВОСТЬ №1</span>
            //             <span className={styles.newsText}>Равным образом реализация намеченного плана развития играет важную роль в формировании форм воздействия! Задача организации, в особенности роль в</span>
            //             <span className={styles.newsText}>формировании форм воздействия! Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение системы</span>
            //             <span className={styles.newsText}>масштабного изменения ряда параметров? Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и</span>
            //             <span className={styles.newsText}>модернизации системы обучения кадров, соответствующей насущным потребностям. Дорогие друзья, социально-экономическое развитие...&nbsp;<Link to="/contacts">Читать далее</Link></span>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default News;