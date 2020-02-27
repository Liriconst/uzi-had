import * as React from "react";
import styles from "./Antupload.module.scss";

class Antupload extends React.Component<{
    location?: any;
}> {
    public render(): React.ReactNode {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        Врачи клиник Медикал Он Груп - Санкт-Петербург стали победителями премии «Выбор пациентов НаПоправку — 2019»
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.spancolor}/>
                    <div className={styles.spantext}>
                        График работы клиник в новогодние праздники
                    </div>
                </div>
            </div>
        );
    };
};

export default Antupload;