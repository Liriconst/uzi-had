import * as React from "react";
import autobind from "autobind-decorator";
import {Router, Switch, Route, Link} from "react-router-dom";
import { Query } from "react-apollo";
import { ApolloError } from "apollo-boost";
import gql from "graphql-tag";
import styles from "./News.module.scss";
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
            }
        }
    }
`;

const NewsList = [
    {
        "id": 1,
        "date": "22.02.2020",
        "title": "Заголовок №1 - Длина 1",
        "text": "Значимость этих проблем настолько очевидна, что курс на социально-ориентированный национальный проект обеспечивает актуальность позиций, занимаемых участниками в отношении поставленных задач.\n" +
            "\n" + "Соображения высшего порядка, а также выбранный нами инновационный путь способствует подготовке и реализации системы обучения кадров, соответствующей насущным потребностям?\n" +
            "\n" + "Разнообразный и богатый опыт выбранный нами инновационный путь в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям.\n" +
            "\n" + "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требует от нас системного...",
        "background": "/static/svg/1-therapy-0064aa.svg",
    },
    {
        "id": 2,
        "date": "23.02.2020",
        "title": "Заголовок №2 - Тестим длину заголовка раз",
        "text": "Равным образом курс на социально-ориентированный национальный проект требует определения и уточнения позиций, занимаемых участниками в отношении поставленных задач!\n" +
            "\n" + "Дорогие друзья, выбранный нами инновационный путь требует от нас системного анализа экономической целесообразности принимаемых решений. Не следует, однако, забывать о том, что рамки и место обучения кадров требует от нас анализа направлений прогрессивного развития.\n" +
            "\n" + "Таким образом, дальнейшее развитие различных форм деятельности обеспечивает актуальность системы масштабного изменения ряда параметров.\n" +
            "\n" + "Разнообразный и богатый опыт социально-экономическое развитие влечет за собой...",
        "background": "/static/svg/1-therapy-0064aa.svg",
    },
    {
        "id": 3,
        "date": "24.02.2020",
        "title": "Заголовок №3 - Продолжаем тестить длину заголовка. Теперь вариант пошире, и это два",
        "text": "Практический опыт показывает, что социально-экономическое развитие обеспечивает широкому кругу специалистов участие в формировании экономической целесообразности принимаемых решений.\n" +
            "\n" + "Не следует, однако, забывать о том, что реализация намеченного плана развития играет важную роль в формировании системы масштабного изменения ряда параметров. Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности играет важную роль в формировании существующих финансовых и административных условий.\n" +
            "\n" + "Таким образом, начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для соответствующих условий активизации.",
        "background": "/static/svg/1-therapy-0064aa.svg",
    }
];

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
                        <div className={styles.newsAll}>
                            {data.allNews.nodes.map((newsQuery: any) => (
                                <Button type="primary" key={newsQuery.id} className={"newsList"}>
                                    <span>Новость&nbsp;</span>
                                    <span>"{newsQuery.title}"&nbsp;</span>
                                    <span>от&nbsp;</span>
                                    <span>{moment(newsQuery.newsDate).format("DD.MM.YYYY hh:mm:ss")}</span>
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