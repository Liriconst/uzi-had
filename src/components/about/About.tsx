import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./About.module.scss";

class About extends React.Component<{}, {
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
            <div className={styles.pageSPA}>
                <div className={styles.spaBlock}>
                    <span className={styles.spaPart1}><img src="/static/img/img-example2.png" alt={""}/></span>
                    <div className={styles.spaPart2}>
                        <div className={styles.spaPart2Header}>Попкова Ольга Николаевна</div>
                        <span className={styles.spaPart2Remark}>Врач ультразвуковой диагностики, терапевт, специалист по</span>
                        <span className={styles.spaPart2Remark}>функциональной диагностике в сфере клинической электрокардиографии</span>
                        <span className={styles.spaPart2Separator}/>
                        <span className={styles.spaPart2Text}>Наш специалист имеет более 10 лет стажа ультразвуковой диагностики.</span>
                        <span className={styles.spaPart2Text}>Также, имеет более 25 лет стажа в функциональной диагностике</span>
                        <span className={styles.spaPart2Text}>в сфере клинической электрокадиографии, а также в терапии.</span>
                        <span className={styles.spaPart2Text}>Обладает более чем 30 сертификатами, подтверждающими уровень</span>
                        <span className={styles.spaPart2Text}>навыков и соответствующую квалификацию.</span>
                        <span className={styles.spaPart2Text}>В том числе, имеет 2 международных сертификата фонда FMF.</span>
                        <span className={styles.spaPart2Text}>Ругулярно принимает активное участие в симпозиумах</span>
                        <span className={styles.spaPart2Text}>в сфере узи, акушерства и гинекологии, и кардиологии.</span>
                        <span className={styles.spaPart2Separator}/>
                        <span className={styles.spaPart2Text}>Телефон для связи со специалистом:</span>
                        <div className={styles.spaPart2Header}><span>+7(918)177-24-17</span></div>
                    </div>
                </div>
                <div className={styles.spaFooter}>
                    <div className={styles.spaFooterButtons}>
                        <div className={styles.spaFooterButtonTemplate}><Link to="/news">Записаться online</Link></div>
                        <div className={styles.spaFooterButtonSeparator}>ИЛИ</div>
                        <div className={styles.spaFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
                    </div>
                    <div className={styles.spaFooterRemark}>Нажимая на кнопку "Записаться online", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.spaFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
                </div>
            </div>
        );
    }
}

export default About;