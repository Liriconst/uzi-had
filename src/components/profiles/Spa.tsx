import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Profile.module.scss";
import {Desktop, Laptop, Tablet, Mobile} from "../../responsiveModule";
import Footer from "../footer/Footer";

const SpaForPC = () => {
    return (
        <div className={styles.pageSPA}>
            <span/>
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
            <span/>
            <Footer/>
            <span/>
        </div>
    )
};

const SpaForLaptop = () => (
    <div className={styles.pageHome}>
        <span/>

        <span/>
        <div className={styles.homeFooter}>
            <div className={styles.homeFooterButtons}>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Посмотреть отзывы</Link></div>
                <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
            </div>
            <div className={styles.homeFooterRemark}>Нажимая на кнопку "Заказать звонок", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
        </div>
        <span/>
    </div>
);

const SpaForTablet = () => (
    <div className={styles.pageHome}>
        <span/>

        <span/>
        <div className={styles.homeFooter}>
            <div className={styles.homeFooterButtons}>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Посмотреть отзывы</Link></div>
                <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
            </div>
            <div className={styles.homeFooterRemark}>Нажимая на кнопку "Заказать звонок", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
        </div>
        <span/>
    </div>
);

const SpaForMobile = () => (
    <div className={styles.pageHome}>
        <span/>

        <span/>
        <div className={styles.homeFooter}>
            <div className={styles.homeFooterButtons}>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Отзывы</Link></div>
                <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Обратный звонок</Link></div>
            </div>
            <div className={styles.homeFooterRemark}>
                <span>Нажимая на кнопку "Обратный звонок", Вы даете Согласие на</span>
                <span>обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></span>
            </div>
        </div>
        <span/>
    </div>
);

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
            <Desktop>
                <SpaForPC/>
            </Desktop>
        );
    }
}

export default Spa;