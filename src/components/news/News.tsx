import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./News.module.scss";

class News extends React.Component<{}, {
    test?: boolean
}> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            test: false
        }
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.pageNews}>
                <div className={styles.newsBlock}>
                    <div className={styles.newsTime}>
                        <span className={styles.newsTimeText}>26.11</span>
                        <span className={styles.newsTimeText}>2019</span>
                    </div>
                    <div className={styles.newsMain}>
                        <span className={styles.newsHeader}>НОВОСТЬ №1</span>
                        <span className={styles.newsText}>Равным образом реализация намеченного плана развития играет важную роль в формировании форм воздействия! Задача организации, в особенности роль в</span>
                        <span className={styles.newsText}>формировании форм воздействия! Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение системы</span>
                        <span className={styles.newsText}>масштабного изменения ряда параметров? Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и</span>
                        <span className={styles.newsText}>модернизации системы обучения кадров, соответствующей насущным потребностям. Дорогие друзья, социально-экономическое развитие...&nbsp;<Link to="/contacts">Читать далее</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;