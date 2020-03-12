import * as React from "react";
import autobind from "autobind-decorator";
import { Query } from "react-apollo";
import { ApolloError } from "apollo-boost";
import gql from "graphql-tag";
import styles from "./About.module.scss";
import "./About.scss";
import { Button } from "antd";
import AboutModal from "./AboutModal";

const GET_ABOUTS = gql`
    query {
        allAbouts(orderBy: ROTATE_DESC) {
            nodes {
                id
                title
                linkImg
                rotate
            }
        }
    }
`;

class About extends React.Component<{}, {
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
            <Query query={GET_ABOUTS}>
                {({loading, error, data}: {loading: boolean, error?: ApolloError, data: any}) => {
                    if (loading) return <span>"Загрузка новостей...";</span>
                    if (error) return <span>`Ошибка! ${error.message}`</span>;
                    console.log(data);
                    return (
                        <div className={styles.pageAbout}>
                            <div className={styles.aboutHeader}>
                                <span className={styles.aboutHeaderTitle}>Дипломы, сертификаты и грамоты наших сотрудников</span>
                                <span className={styles.aboutHeaderPreview}>Более 30 различных документов, подтверждающих нашу высокую квалификацию и стаж</span>
                            </div>
                            <div className={styles.aboutCards}>
                            {data.allAbouts.nodes.map((aboutQuery: any) => (
                                <div>
                                    <Button type="primary" key={aboutQuery.id} className={"aboutButton"} onClick={() => this.showModal(aboutQuery.id)}>
                                        <div className={(aboutQuery.rotate) ? styles.aboutImgVertical : styles.aboutImgHorizontal} ><img src={aboutQuery.linkImg} alt=""/></div>
                                        <span className={styles.aboutTitleCard}>{aboutQuery.title}</span>
                                    </Button>
                                    <AboutModal about={aboutQuery} isVisible={aboutQuery.id === this.state.activeModal} onClose={this.handleCancel}/>
                                </div>
                            ))}
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default About;