import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Home.module.scss";

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

// <div><Link to="/news">Новости</Link></div>
    public render(): React.ReactNode {
        return (
            <div className={styles.pageHome}>
                <div className={styles.homeAdvantages}>
                    <div className={styles.homeAdvantageTemplate}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src="/static/svg/1-therapy-0064aa.svg" alt={""}/>
                            <img id={styles.img2} src="/static/svg/1-therapy-White.svg" alt={""}/>
                        </div>
                        <div className={styles.homeAdvantageTemplateTextHeader}>ВЫСОКАЯ</div>
                        <div className={styles.homeAdvantageTemplateTextHeader}><span>КВАЛИФИКАЦИЯ</span></div>
                        <div className={styles.homeAdvantageTemplateText}>Мы уже более 10 лет проводим ультразвуковые</div>
                        <div className={styles.homeAdvantageTemplateText}>исследования и оказываем услуги по ЭКГ, опираясь</div>
                        <div className={styles.homeAdvantageTemplateText}>как на собственный опыт, так и на  основные</div>
                        <div className={styles.homeAdvantageTemplateText}>врачебные стандарты. Более 25 лет практики в терапии.</div>
                        <div className={styles.homeAdvantageTemplateText}>Также, более 25 лет практики в функциональной</div>
                        <div className={styles.homeAdvantageTemplateText}>диагностике в сфере клинической электро-</div>
                        <div className={styles.homeAdvantageTemplateText}>кардиографии – всё это позволяет нам быстро,</div>
                        <div className={styles.homeAdvantageTemplateText}>а главное – качественно, оказывать наши услуги.</div>
                        <div className={styles.homeAdvantageTemplateText}>Свыше 12 000 довольных клиентов – являются</div>
                        <div className={styles.homeAdvantageTemplateText}>ярким показателем уровня нашей работы.</div>
                        <div className={styles.homeAdvantageTemplateLink}><Link to="/news">Подробнее об УЗИ</Link></div>
                    </div>
                    <span className={styles.homeAdvantageSeparator}/>
                    <div className={styles.homeAdvantageTemplate}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src="/static/svg/2-medal-0064aa.svg" alt={""}/>
                            <img id={styles.img2} src="/static/svg/2-medal-White.svg" alt={""}/>
                        </div>
                        <div className={styles.homeAdvantageTemplateTextHeader}>НАВЫКИ И</div>
                        <div className={styles.homeAdvantageTemplateTextHeader}><span>СЕРТИФИКАЦИЯ</span></div>
                        <div className={styles.homeAdvantageTemplateText}>Наш ведущий специалист - Попкова Ольга Николаевна</div>
                        <div className={styles.homeAdvantageTemplateText}>является врачом ультразвуковой диагностики с</div>
                        <div className={styles.homeAdvantageTemplateText}>10-летним стажем. Обладает более чем 30 дипломами,</div>
                        <div className={styles.homeAdvantageTemplateText}>сертификатами и документами, подтверждающими</div>
                        <div className={styles.homeAdvantageTemplateText}>навыки и высокий уровень профессионализма.</div>
                        <div className={styles.homeAdvantageTemplateText}>Также, имеет 2 международных сертификата фонда</div>
                        <div className={styles.homeAdvantageTemplateText}>медицины плода (The Fetal Medicine Foundation).</div>
                        <div className={styles.homeAdvantageTemplateText}>Принимала неоднократное участие во всероссийских и</div>
                        <div className={styles.homeAdvantageTemplateText}>международных конференциях и симпозиумах в сфере</div>
                        <div className={styles.homeAdvantageTemplateText}>узи, акушерства и гинекологии, и кардиологии.</div>
                        <div className={styles.homeAdvantageTemplateLink}><Link to="/about">Подробнее о нас</Link></div>
                    </div>
                    <span className={styles.homeAdvantageSeparator}/>
                    <div className={styles.homeAdvantageTemplate}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src="/static/svg/3-ultra-0064aa.svg" alt={""}/>
                            <img id={styles.img2} src="/static/svg/3-ultra-White.svg" alt={""}/>
                        </div>
                        <div className={styles.homeAdvantageTemplateTextHeader}>ВЫСОКОКЛАССНОЕ</div>
                        <div className={styles.homeAdvantageTemplateTextHeader}><span>ОБОРУДОВАНИЕ</span></div>
                        <div className={styles.homeAdvantageTemplateText}>Чтобы отвечать всем требованиям современной</div>
                        <div className={styles.homeAdvantageTemplateText}>медицины, мы используем только качественное</div>
                        <div className={styles.homeAdvantageTemplateText}>оборудование. Наш прибор УЗИ – сканер экспертного</div>
                        <div className={styles.homeAdvantageTemplateText}>класса. Поддержка тканевой гармоники, сканирование</div>
                        <div className={styles.homeAdvantageTemplateText}>в 4D формате в режиме реального времени,TEE –</div>
                        <div className={styles.homeAdvantageTemplateText}>эти, и другие не менее важные преимущества  наглядно</div>
                        <div className={styles.homeAdvantageTemplateText}>выделяют наш УЗИ сканер среди прочих аналогов.</div>
                        <div className={styles.homeAdvantageTemplateText}>Наш ЭКГ-аппарат является современным прибором,</div>
                        <div className={styles.homeAdvantageTemplateText}>позволяющим работать с электрокардиограммами по</div>
                        <div className={styles.homeAdvantageTemplateText}>всем актуальным нормам функциональной диагностики.</div>
                        <div className={styles.homeAdvantageTemplateLink}><Link to="/contacts">Связаться с нами</Link></div>
                    </div>
                </div>
                <div className={styles.homeFooter}>
                    <div className={styles.homeFooterButtons}>
                        <div className={styles.homeFooterButtonTemplate}><Link to="/news">Записаться online</Link></div>
                        <div className={styles.homeFooterButtonSeparator}>ИЛИ</div>
                        <div className={styles.homeFooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
                    </div>
                    <div className={styles.homeFooterRemark}>Нажимая на кнопку "Записаться online", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.homeFooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
                </div>
            </div>
        );
    }
}

export default Home;