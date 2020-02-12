import * as React from "react";
import styles from "./Profile.module.scss";
import { Tablet, Mobile, LaptopMin, TabletAndMobile } from "../../responsiveModule";
import Footer from "../footer/Footer";
import FooterMobile from "../footer/FooterMobile";

const ultrasoundInfo = {
    "ultrasoundInfoInfoText": [
        "Наш специалист имеет более 17 лет стажа  масажа и эстетики тела.",
        "Владеет различными техниками массажа, среди которых:",
        "классический массаж, лифмодренажный, Шиацу, ваккумный,",
        "оздоровительный, в том числе, известный stone-массаж.",
        "Также владеет различными программами коррекции фигуры",
        "(в том числе и антициллюлитная программа).",
        "Является обладателем сертификатов в области",
        "коррекции фигуры и ухода за телом."
    ],
    "ultrasoundInfoInfoTextTablet": [
        "Наш специалист имеет более 17 лет стажа  масажа и эстетики тела.",
        "Владеет различными техниками массажа, среди которых:",
        "классический массаж, лифмодренажный, Шиацу, ваккумный,",
        "оздоровительный, в том числе, известный stone-массаж. Также",
        "владеет различными программами коррекции фигуры (в том",
        "числе и антициллюлитная программа). Является обладателем",
        "сертификатов в области коррекции фигуры и ухода за телом."
    ],
    "ultrasoundInfoInfoTextMobile": [
        "Наш специалист имеет более 17 лет стажа",
        "масажа и эстетики тела. Владеет различными",
        "техниками массажа, среди которых: классический",
        "массаж, лифмодренажный, Шиацу, ваккумный,",
        "оздоровительный, и известный stone-массаж.",
        "Также владеет различными программами коррекции",
        "фигуры (в том числе и антициллюлитная программа).",
        "Является обладателем сертификатов в области",
        "коррекции фигуры и ухода за телом."
    ]
};

class Ultrasound extends React.Component<{
    ultrasoundInfoInfoText?: string[]
}, {
}> {
    public render(): React.ReactNode {
        return (
            <div className={styles.pageProfile}>
                <LaptopMin>
                    <span/>
                    <div className={styles.profileCard}>
                        <span/>
                        <span className={styles.profileAvatar}><img src="/static/img/img-example378.png" alt=""/></span>
                        <span/>
                        <div className={styles.profileInfo}>
                            <div className={styles.profileHeader}>Попкова Ольга Николаевна</div>
                            <div className={styles.profileRank}>
                                <span>Врач ультразвуковой диагностики,</span>
                                <span>терапии и функциональной диагностики</span>
                            </div>
                            <span className={styles.profileSeparator}/>
                            <div className={styles.profileInfoText}>
                                {ultrasoundInfo.ultrasoundInfoInfoText.map(current => (<span>{current}</span>))}
                            </div>
                            <span className={styles.profileSeparator}/>
                            <span className={styles.profileInfoText}>Телефон для связи со специалистом:</span>
                            <div className={styles.profileHeader}><span>+7(918)177-24-17</span></div>
                        </div>
                        <span/>
                    </div>
                    <span/>
                    <Footer/>
                    <span/>
                </LaptopMin>
                <TabletAndMobile>
                    <span/>
                    <div className={styles.profileCardWrap}>
                        <span/>
                        <div className={styles.profileCard}>
                            <span className={styles.profileAvatar}><img src="/static/img/img-example378.png" alt=""/></span>
                            <span/>
                            <div className={styles.profileInfo}>
                                <div className={styles.profileHeader}>Попкова Ольга Николаевна</div>
                                <div className={styles.profileRank}>
                                    <span>Врач ультразвуковой диагностики,</span>
                                    <span>терапии и функциональной диагностики</span>
                                </div>
                                <span className={styles.profileSeparator}/>
                                <div className={styles.profileInfoText}>
                                    <Tablet>{ultrasoundInfo.ultrasoundInfoInfoTextTablet.map(current => (<span>{current}</span>))}</Tablet>
                                    <Mobile>{ultrasoundInfo.ultrasoundInfoInfoTextMobile.map(current => (<span>{current}</span>))}</Mobile>
                                </div>
                                <span className={styles.profileSeparator}/>
                                <span className={styles.profileInfoText}>Телефон для связи со специалистом:</span>
                                <div className={styles.profileHeader}><span>+7(918)177-24-17</span></div>
                            </div>
                        </div>
                        <span/>
                    </div>
                    <span/>
                    <Tablet><Footer/></Tablet>
                    <Mobile><FooterMobile/></Mobile>
                    <span/>
                </TabletAndMobile>
            </div>
        );
    }
}

export default Ultrasound;