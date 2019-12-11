import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import styles from "./Reviews.module.scss";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

class Reviews extends React.Component<{}, {
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
            <div className={styles.pageReviews}>
                <div>
                </div>
                <div className={styles.reviewsBlock}>
                    <div className={styles.reviewsTime}>
                        <span className={styles.reviewsTimeText}>26.11</span>
                        <span className={styles.reviewsTimeText}>2019</span>
                    </div>
                    <div className={styles.reviewsMain}>
                        <span className={styles.reviewsHeader}>НОВОСТЬ №1</span>
                        <span className={styles.reviewsText}>Равным образом реализация намеченного плана развития играет важную роль в формировании форм воздействия! Задача организации, в особенности роль в</span>
                        <span className={styles.reviewsText}>формировании форм воздействия! Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение системы</span>
                        <span className={styles.reviewsText}>масштабного изменения ряда параметров? Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и</span>
                        <span className={styles.reviewsText}>модернизации системы обучения кадров, соответствующей насущным потребностям. Дорогие друзья, социально-экономическое развитие...&nbsp;<Link to="/contacts">Читать далее</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;