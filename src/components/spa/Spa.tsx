import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Spa.module.scss";

class Spa extends React.Component<{}, {
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
                        <div className={styles.spaPart2Header}>Попков Игорь Евгеньевич</div>
                        <span className={styles.spaPart2Remark}>Специалист по эстетике тела, уходу и</span>
                        <span className={styles.spaPart2Remark}>коррекции фигуры, специалист СПА</span>
                        <span className={styles.spaPart2Separator}/>
                        <span className={styles.spaPart2Text}>Наш специалист имеет более 17 лет стажа  масажа и эстетики тела.</span>
                        <span className={styles.spaPart2Text}>Владеет различными техниками массажа, среди которых:</span>
                        <span className={styles.spaPart2Text}>классический массаж, лифмодренажный, Шиацу, ваккумный,</span>
                        <span className={styles.spaPart2Text}>оздоровительный, в том числе, известный stone-массаж.</span>
                        <span className={styles.spaPart2Text}>Также владеет различными программами коррекции фигуры</span>
                        <span className={styles.spaPart2Text}>(в том числе и антициллюлитная программа).</span>
                        <span className={styles.spaPart2Text}>Является обладателем сертификатов в области</span>
                        <span className={styles.spaPart2Text}>коррекции фигуры и ухода за телом.</span>
                        <span className={styles.spaPart2Separator}/>
                        <span className={styles.spaPart2Text}>Телефон для связи со специалистом:</span>
                        <div className={styles.spaPart2Header}><span>+7(928)282-47-24</span></div>
                    </div>
                </div>
                <div className={styles.spaFooter}>
                    <div className={styles.spaFooterButtons}>
                        <div className={styles.spaFooterButtonTemplate}><Link to="/news">Оставить отзыв</Link></div>
                        <div className={styles.spaFooterButtonSeparator}>ИЛИ</div>
                        <div className={styles.spaFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
                    </div>
                    <div className={styles.spaFooterRemark}>Нажимая на кнопку "Заказать звонок", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.spaFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
                </div>
            </div>
        );
    }
}

export default Spa;