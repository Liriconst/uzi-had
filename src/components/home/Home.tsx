import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Home.module.scss";
import {Desktop, DesktopAndLaptop, DesktopMax, Laptop, Tablet} from "../../responsiveModule";
import {Dropdown} from "antd";

const HomeForPC = () => {
    return (
        <div className={styles.pageHome}>
            <span/>
            <div className={styles.homeAdvantages}>
                <span/>
                <div className={styles.homeAdvantageTemplate}>
                    <div className={styles.homeAdvantageTemplateIcon}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src="/static/svg/1-therapy-0064aa.svg" alt={""}/>
                            <img id={styles.img2} src="/static/svg/1-therapy-White.svg" alt={""}/>
                        </div>
                    </div>
                    <div className={styles.homeAdvantageTemplateHeader}>
                        <span>ВЫСОКАЯ</span>
                        <span>КВАЛИФИКАЦИЯ</span>
                    </div>
                    <div className={styles.homeAdvantageTemplateText}>
                        <span>Мы уже более 10 лет проводим ультразвуковые</span>
                        <span>исследования и оказываем услуги по ЭКГ, опираясь</span>
                        <span>как на собственный опыт, так и на  основные</span>
                        <span>врачебные стандарты. Более 25 лет практики в терапии.</span>
                        <span>Также, более 25 лет практики в функциональной</span>
                        <span>диагностике в сфере клинической электро-</span>
                        <span>кардиографии – всё это позволяет нам быстро,</span>
                        <span>а главное – качественно, оказывать наши услуги.</span>
                        <span>Свыше 12 000 довольных клиентов – являются</span>
                        <span>ярким показателем уровня нашей работы.</span>
                    </div>
                    <div className={styles.homeAdvantageTemplateLink}><Link to="/news">Подробнее об УЗИ</Link></div>
                </div>
                <span className={styles.homeAdvantageSeparator}/>
                <div className={styles.homeAdvantageTemplate}>
                    <div className={styles.homeAdvantageTemplateIcon}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src="/static/svg/2-medal-0064aa.svg" alt={""}/>
                            <img id={styles.img2} src="/static/svg/2-medal-White.svg" alt={""}/>
                        </div>
                    </div>
                    <div className={styles.homeAdvantageTemplateHeader}>
                        <span>НАВЫКИ И</span>
                        <span>СЕРТИФИКАЦИЯ</span>
                    </div>
                    <div className={styles.homeAdvantageTemplateText}>
                        <span>Наш ведущий специалист - Попкова Ольга Николаевна</span>
                        <span>является врачом ультразвуковой диагностики с</span>
                        <span>10-летним стажем. Обладает более чем 30 дипломами,</span>
                        <span>сертификатами и документами, подтверждающими</span>
                        <span>навыки и высокий уровень профессионализма.</span>
                        <span>Также, имеет 2 международных сертификата фонда</span>
                        <span>медицины плода (The Fetal Medicine Foundation).</span>
                        <span>Принимала неоднократное участие во всероссийских и</span>
                        <span>международных конференциях и симпозиумах в сфере</span>
                        <span>узи, акушерства и гинекологии, и кардиологии.</span>
                    </div>
                    <div className={styles.homeAdvantageTemplateLink}><Link to="/about">Подробнее о нас</Link></div>
                </div>
                <span className={styles.homeAdvantageSeparator}/>
                <div className={styles.homeAdvantageTemplate}>
                    <div className={styles.homeAdvantageTemplateIcon}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src="/static/svg/3-ultra-0064aa.svg" alt={""}/>
                            <img id={styles.img2} src="/static/svg/3-ultra-White.svg" alt={""}/>
                        </div>
                    </div>
                    <div className={styles.homeAdvantageTemplateHeader}>
                        <span>ВЫСОКОКЛАССНОЕ</span>
                        <span>ОБОРУДОВАНИЕ</span>
                    </div>
                    <div className={styles.homeAdvantageTemplateText}>
                        <span>Чтобы отвечать всем требованиям современной</span>
                        <span>медицины, мы используем только качественное</span>
                        <span>оборудование. Наш прибор УЗИ – сканер экспертного</span>
                        <span>класса. Поддержка тканевой гармоники, сканирование</span>
                        <span>в 4D формате в режиме реального времени,TEE –</span>
                        <span>эти, и другие не менее важные преимущества  наглядно</span>
                        <span>выделяют наш УЗИ сканер среди прочих аналогов.</span>
                        <span>Наш ЭКГ-аппарат является современным прибором,</span>
                        <span>позволяющим работать с электрокардиограммами по</span>
                        <span>всем актуальным нормам функциональной диагностики.</span>
                    </div>
                    <div className={styles.homeAdvantageTemplateLink}><Link to="/contacts">Связаться с нами</Link></div>
                </div>
                <span/>
            </div>
            <span/>
            <div className={styles.homeFooter}>
                <div className={styles.homeFooterButtons}>
                    <div className={styles.homeFooterButtonTemplate}><Link to="/news">Записаться online</Link></div>
                    <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                    <div className={styles.homeFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
                </div>
                <div className={styles.homeFooterRemark}>Нажимая на кнопку "Записаться online", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
            </div>
            <span/>
        </div>
    )
};

// const Name = () => Варианты: {return(<span/>)} и (<span/>) одинаковы. Функциональные компоненты. В рамках одного кмпонента

const HomeForLaptop = () => (
    <div className={styles.pageHome}>
        <span/>
        <div className={styles.homeAdvantages}>
            <div className={styles.homeAdvantageTemplate}>
                <span/>
                <div className={styles.homeAdvantageTemplateIcon}>
                    <div className={styles.homeAdvantageTemplateImg}>
                        <img id={styles.img1} src="/static/svg/1-therapy-0064aa.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/1-therapy-White.svg" alt={""}/>
                    </div>
                </div>
                <div className={styles.homeAdvantageContainer}>
                    <div className={styles.homeAdvantageTemplateHeader}>ВЫСОКАЯ КВАЛИФИКАЦИЯ</div>
                    <div className={styles.homeAdvantageTemplateText}>
                        <span>Мы уже более 10 лет проводим ультразвуковые исследования и оказываем услуги по ЭКГ, опираясь</span>
                        <span>как на собственный опыт, так и на основные врачебные стандарты. Более 25 лет практики в терапии.</span>
                        <span>Также, более 25 лет практики в функциональной диагностике в сфере клинической электрокардиографии</span>
                        <span>– всё это позволяет нам быстро, а главное – качественно, оказывать наши услуги. Свыше 12 000</span>
                        <span>довольных клиентов являются ярким показателем уровня нашей работы. <Link to="/news">Подробнее об УЗИ</Link></span>
                    </div>
                </div>
                <span/>
            </div>
            <div className={styles.homeAdvantageSeparatorContainer}>
                <span/>
                <span className={styles.homeAdvantageSeparator}/>
                <span/>
            </div>
            <div className={styles.homeAdvantageTemplate}>
                <span/>
                <div className={styles.homeAdvantageTemplateIcon}>
                    <div className={styles.homeAdvantageTemplateImg}>
                        <img id={styles.img1} src="/static/svg/2-medal-0064aa.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/2-medal-White.svg" alt={""}/>
                    </div>
                </div>
                <div className={styles.homeAdvantageContainer}>
                    <div className={styles.homeAdvantageTemplateHeader}>НАВЫКИ И СЕРТИФИКАЦИЯ</div>
                    <div className={styles.homeAdvantageTemplateText}>
                        <span>Наш ведущий специалист - Попкова Ольга Николаевна является врачом ультразвуковой диагностики</span>
                        <span>c 10-летним стажем. Обладает более чем 30 дипломами, сертификатами и документами, подтверждающими</span>
                        <span>навыки и высокий уровень профессионализма. Также, имеет 2 международных сертификата фонда</span>
                        <span>медицины плода (The Fetal Medicine Foundation). Принимала неоднократное участие во всероссийских</span>
                        <span>и международных конференциях в сфере узи, акушерства и гинекологии, и кардиологии. <Link to="/about">Подробнее о нас</Link></span>
                    </div>
                </div>
            </div>
            <div className={styles.homeAdvantageSeparatorContainer}>
                <span/>
                <span className={styles.homeAdvantageSeparator}/>
                <span/>
            </div>
            <div className={styles.homeAdvantageTemplate}>
                <span/>
                <div className={styles.homeAdvantageTemplateIcon}>
                    <div className={styles.homeAdvantageTemplateImg}>
                        <img id={styles.img1} src="/static/svg/3-ultra-0064aa.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/3-ultra-White.svg" alt={""}/>
                    </div>
                </div>
                <div className={styles.homeAdvantageContainer}>
                    <div className={styles.homeAdvantageTemplateHeader}>ВЫСОКОКЛАССНОЕ ОБОРУДОВАНИЕ</div>
                    <div className={styles.homeAdvantageTemplateText}>
                        <span>Чтобы отвечать всем требованиям современной медицины, мы используем только качественное оборудование.</span>
                        <span>Наш прибор УЗИ – сканер экспертного класса. Поддержка тканевой гармоники, сканирование в 4D формате</span>
                        <span>в режиме реального времени,TEE – эти, и другие не менее важные преимущества наглядно выделяют наш</span>
                        <span>УЗИ сканер среди прочих аналогов. Наш ЭКГ-аппарат является современным прибором, позволяющим работать</span>
                        <span>с электрокардиограммами по всем актуальным нормам функциональной диагностики. <Link to="/contacts">Связаться с нами</Link></span>
                    </div>
                </div>
            </div>
        </div>
        <span/>
        <div className={styles.homeFooter}>
            <div className={styles.homeFooterButtons}>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Записаться online</Link></div>
                <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
            </div>
            <div className={styles.homeFooterRemark}>Нажимая на кнопку "Записаться online", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
        </div>
        <span/>
    </div>
);

const HomeForTablet = () => (
    <div className={styles.pageHome}>
        <span/>
        <div className={styles.homeAdvantages}>
            <span/>
            <div className={styles.homeAdvantageTemplate}>
                <div className={styles.homeAdvantageTemplateIcon}>
                    <div className={styles.homeAdvantageTemplateImg}>
                        <img id={styles.img1} src="/static/svg/1-therapy-0064aa.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/1-therapy-White.svg" alt={""}/>
                    </div>
                </div>
                <div className={styles.homeAdvantageTemplateHeader}>
                    <span>ВЫСОКАЯ</span>
                    <span>КВАЛИФИКАЦИЯ</span>
                </div>
                <div className={styles.homeAdvantageTemplateText}>
                    <span>Мы уже более 10 лет проводим ультразвуковые</span>
                    <span>исследования и оказываем услуги по ЭКГ, опираясь</span>
                    <span>как на собственный опыт, так и на  основные</span>
                    <span>врачебные стандарты. Более 25 лет практики в терапии.</span>
                    <span>Также, более 25 лет практики в функциональной</span>
                    <span>диагностике в сфере клинической электро-</span>
                    <span>кардиографии – всё это позволяет нам быстро,</span>
                    <span>а главное – качественно, оказывать наши услуги.</span>
                    <span>Свыше 12 000 довольных клиентов – являются</span>
                    <span>ярким показателем уровня нашей работы.</span>
                </div>
                <div className={styles.homeAdvantageTemplateLink}><Link to="/news">Подробнее об УЗИ</Link></div>
            </div>
            <span className={styles.homeAdvantageSeparator}/>
            <div className={styles.homeAdvantageTemplate}>
                <div className={styles.homeAdvantageTemplateIcon}>
                    <div className={styles.homeAdvantageTemplateImg}>
                        <img id={styles.img1} src="/static/svg/2-medal-0064aa.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/2-medal-White.svg" alt={""}/>
                    </div>
                </div>
                <div className={styles.homeAdvantageTemplateHeader}>
                    <span>НАВЫКИ И</span>
                    <span>СЕРТИФИКАЦИЯ</span>
                </div>
                <div className={styles.homeAdvantageTemplateText}>
                    <span>Наш ведущий специалист - Попкова Ольга Николаевна</span>
                    <span>является врачом ультразвуковой диагностики с</span>
                    <span>10-летним стажем. Обладает более чем 30 дипломами,</span>
                    <span>сертификатами и документами, подтверждающими</span>
                    <span>навыки и высокий уровень профессионализма.</span>
                    <span>Также, имеет 2 международных сертификата фонда</span>
                    <span>медицины плода (The Fetal Medicine Foundation).</span>
                    <span>Принимала неоднократное участие во всероссийских и</span>
                    <span>международных конференциях и симпозиумах в сфере</span>
                    <span>узи, акушерства и гинекологии, и кардиологии.</span>
                </div>
                <div className={styles.homeAdvantageTemplateLink}><Link to="/about">Подробнее о нас</Link></div>
            </div>
            <span className={styles.homeAdvantageSeparator}/>
            <div className={styles.homeAdvantageTemplate}>
                <div className={styles.homeAdvantageTemplateIcon}>
                    <div className={styles.homeAdvantageTemplateImg}>
                        <img id={styles.img1} src="/static/svg/3-ultra-0064aa.svg" alt={""}/>
                        <img id={styles.img2} src="/static/svg/3-ultra-White.svg" alt={""}/>
                    </div>
                </div>
                <div className={styles.homeAdvantageTemplateHeader}>
                    <span>ВЫСОКОКЛАССНОЕ</span>
                    <span>ОБОРУДОВАНИЕ</span>
                </div>
                <div className={styles.homeAdvantageTemplateText}>
                    <span>Чтобы отвечать всем требованиям современной</span>
                    <span>медицины, мы используем только качественное</span>
                    <span>оборудование. Наш прибор УЗИ – сканер экспертного</span>
                    <span>класса. Поддержка тканевой гармоники, сканирование</span>
                    <span>в 4D формате в режиме реального времени,TEE –</span>
                    <span>эти, и другие не менее важные преимущества  наглядно</span>
                    <span>выделяют наш УЗИ сканер среди прочих аналогов.</span>
                    <span>Наш ЭКГ-аппарат является современным прибором,</span>
                    <span>позволяющим работать с электрокардиограммами по</span>
                    <span>всем актуальным нормам функциональной диагностики.</span>
                </div>
                <div className={styles.homeAdvantageTemplateLink}><Link to="/contacts">Связаться с нами</Link></div>
            </div>
            <span/>
        </div>
        <span/>
        <div className={styles.homeFooter}>
            <div className={styles.homeFooterButtons}>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Записаться online</Link></div>
                <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                <div className={styles.homeFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
            </div>
            <div className={styles.homeFooterRemark}>Нажимая на кнопку "Записаться online", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
        </div>
        <span/>
    </div>
);

const HeaderForMobile = ({location}: {location:any}) => (
    <div className={styles.appHeader}>
        <div className={styles.appHeaderStart}>
            <a className={styles.appHeaderMiddleFavicon} href='/home'>
                <img src="/static/img/9-favicon.png" alt={""}/>
            </a>
            <span className={styles.appHeaderStartSeparator}/>
            <div className={styles.appHeaderMiddleName}>
                <div className={styles.appHeaderMiddleNameFirst}><Link to="/home">медицинский центр</Link></div>
                <div className={styles.appHeaderMiddleNameSecond}><Link to="/home">"ЮЖНЫЙ"</Link></div>
            </div>
            <span className={styles.appHeaderStartSeparator}/>
        </div>
        {/*<Mobile>*/}
        {/*    <div className={styles.appHeaderStartMenuModal}>*/}
        {/*        <div className={location.pathname === "/home" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/home">ГЛАВНАЯ</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/news" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/news">НОВОСТИ</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/ultrasound" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/ultrasound">УЗИ</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/spa" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/spa">МАССАЖ</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/spa" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/spa">ЦЕНЫ</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/about" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/about">О НАС</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/contacts" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/contacts">КОНТАКТЫ</Link></div>*/}
        {/*        <span className={styles.appHeaderStartMenuModalSeparator}/>*/}
        {/*        <div className={location.pathname === "/reviews" ? styles.appHeaderStartMenuModalCurrentLink :*/}
        {/*            styles.appHeaderStartMenuModalLinks}><Link to="/reviews">ОТЗЫВЫ</Link></div>*/}
        {/*        <span/>*/}
        {/*        <div className={styles.appHeaderStartMenuModalImgContainer}>*/}
        {/*            <a className={styles.appHeaderStartMenuModalImgLink} href='/home'>*/}
        {/*                <img src="/static/svg/4-vk.svg" alt={""}/>*/}
        {/*            </a>*/}
        {/*            <span className={styles.appHeaderStartMenuModalImgSeparator}/>*/}
        {/*            <a className={styles.appHeaderStartMenuModalImgLink} href='/home'>*/}
        {/*                <img src="/static/svg/4-instagram.svg" alt={""}/>*/}
        {/*            </a>*/}
        {/*        </div>*/}
        {/*        <div className={styles.appHeaderStartMenuModalAddressContainer}>*/}
        {/*            <div className={styles.appHeaderStartMenuModalAddress}>г. Хадыженск, ул. Первомайская,</div>*/}
        {/*            <div className={styles.appHeaderStartMenuModalAddress}>д. 103 "А", 2 этаж, кабинет 6</div>*/}
        {/*        </div>*/}
        {/*        <div className={styles.appHeaderStartMenuModalLinks}><span>+7(918)177-24-17</span></div>*/}
        {/*    </div>*/}
        {/*</Mobile>*/}
    </div>
);

class Home extends React.Component<{}, {
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
            <>
                <Desktop>
                    <HomeForPC/>
                </Desktop>
                <Laptop>
                    <HomeForLaptop/>
                </Laptop>
                <Tablet>
                    <HomeForTablet/>
                </Tablet>
            </>
        );
    }
}

export default Home;