import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Home.module.scss";
import {Desktop, Laptop, Tablet, Mobile} from "../../responsiveModule";
import Footer from "../footer/Footer";
import FooterMobile from "../footer/FooterMobile";
import AdvantageTemplate from "./AdvantageTemplate";

const Advantages = [
    {
        "id": 1,
        "img1": "/static/svg/1-therapy-0064aa.svg",
        "img2": "/static/svg/1-therapy-White.svg",
        "header1": "ВЫСОКАЯ",
        "header2": "КВАЛИФИКАЦИЯ",
        "headerLaptop": "ВЫСОКАЯ КВАЛИФИКАЦИЯ",
        "textPCTablet": [
            "Мы уже более 10 лет проводим ультразвуковые",
            "исследования и оказываем услуги по ЭКГ, опираясь",
            "как на собственный опыт, так и на  основные",
            "врачебные стандарты. Более 25 лет практики в терапии.",
            "Также, более 25 лет практики в функциональной",
            "диагностике в сфере клинической электро-",
            "кардиографии – всё это позволяет нам быстро,",
            "а главное – качественно, оказывать наши услуги.",
            "Свыше 12 000 довольных клиентов – являются",
            "ярким показателем уровня нашей работы.",
        ],
        "textLaptop": [
            "Мы уже более 10 лет проводим ультразвуковые исследования и оказываем услуги по ЭКГ, опираясь",
            "как на собственный опыт, так и на основные врачебные стандарты. Более 25 лет практики в терапии.",
            "Также, более 25 лет практики в функциональной диагностике в сфере клинической электрокардиографии",
            "– всё это позволяет нам быстро, а главное – качественно, оказывать наши услуги. Свыше 12 000",
        ],
        "textLaptopEnd" : "довольных клиентов являются ярким показателем уровня нашей работы.&nbsp;",
        "textMobile": [
            "Мы уже более 10 лет проводим",
            "ультразвуковые исследования и",
            "оказываем услуги по ЭКГ, опираясь",
            "как на собственный опыт, так и на",
            "основные врачебные стандарты.",
            "Более 25 лет практики в терапии.",
            "Также, более 25 лет практики в",
            "функциональной диагностике",
            "в сфере клинической электро-",
            "кардиографии – всё это позволяет",
            "нам быстро и качественно,",
            "оказывать наши услуги.",
            "Свыше 12 000 довольных клиентов",
            "являются ярким показателем",
            "уровня нашей работы.",
        ],
        "linkText": "Подробнее об УЗИ",
        "advLink": "/home"
    },
    {
        "id": 2,
        "img1": "/static/svg/2-medal-0064aa.svg",
        "img2": "/static/svg/2-medal-White.svg",
        "header1": "НАВЫКИ И",
        "header2": "СЕРТИФИКАЦИЯ",
        "headerLaptop": "НАВЫКИ И СЕРТИФИКАЦИЯ",
        "textPCTablet": [
            "Наш ведущий специалист - Попкова Ольга Николаевна",
            "является врачом ультразвуковой диагностики с",
            "10-летним стажем. Обладает более чем 30 дипломами,",
            "сертификатами и документами, подтверждающими",
            "навыки и высокий уровень профессионализма.",
            "Также, имеет 2 международных сертификата фонда",
            "медицины плода (The Fetal Medicine Foundation).",
            "Принимала неоднократное участие во всероссийских и",
            "международных конференциях и симпозиумах в сфере",
            "узи, акушерства и гинекологии, и кардиологии.",
        ],
        "textLaptop": [
            "Наш ведущий специалист - Попкова Ольга Николаевна является врачом ультразвуковой диагностики",
            "c 10-летним стажем. Обладает более чем 30 дипломами, сертификатами и документами, подтверждающими",
            "навыки и высокий уровень профессионализма. Также, имеет 2 международных сертификата фонда",
            "медицины плода (The Fetal Medicine Foundation). Принимала неоднократное участие во всероссийских",
        ],
        "textLaptopEnd" : "с электрокардиограммами по всем актуальным нормам функциональной диагностики.&nbsp;",
        "textMobile": [
            "Наш ведущий специалист",
            "Попкова Ольга Николаевна",
            "является врачом ультразвуковой",
            "диагностики с 10-летним стажем.",
            "Обладает более чем 30 дипломами,",
            "сертификатами и документами,",
            "подтверждающими навыки и",
            "высокий уровень профессионализма.",
            "Также, имеет 2 международных",
            "сертификата фондамедицины плода",
            "(The Fetal Medicine Foundation)",
            "Принимала неоднократное участие",
            "во всероссийских и международных",
            "конференциях в сфере кардиологии,",
            "узи, акушерства и гинекологии.",
        ],
        "linkText": "Подробнее о нас",
        "advLink": "/home"
    },
    {
        "id": 3,
        "img1": "/static/svg/3-ultra-0064aa.svg",
        "img2": "/static/svg/3-ultra-White.svg",
        "header1": "ВЫСОКОКЛАССНОЕ",
        "header2": "ОБОРУДОВАНИЕ",
        "headerLaptop": "ВЫСОКОКЛАССНОЕ ОБОРУДОВАНИЕ",
        "textPCTablet": [
            "Чтобы отвечать всем требованиям современной",
            "медицины, мы используем только качественное",
            "оборудование. Наш прибор УЗИ – сканер экспертного",
            "класса. Поддержка тканевой гармоники, сканирование",
            "в 4D формате в режиме реального времени,TEE –",
            "эти, и другие не менее важные преимущества  наглядно",
            "выделяют наш УЗИ сканер среди прочих аналогов.",
            "Наш ЭКГ-аппарат является современным прибором,",
            "позволяющим работать с электрокардиограммами по",
            "всем актуальным нормам функциональной диагностики.",
        ],
        "textLaptop": [
            "Чтобы отвечать всем требованиям современной медицины, мы используем только качественное оборудование.",
            "Наш прибор УЗИ – сканер экспертного класса. Поддержка тканевой гармоники, сканирование в 4D формате",
            "в режиме реального времени,TEE – эти, и другие не менее важные преимущества наглядно выделяют наш",
            "УЗИ сканер среди прочих аналогов. Наш ЭКГ-аппарат является современным прибором, позволяющим работать",
        ],
        "textLaptopEnd" : "с электрокардиограммами по всем актуальным нормам функциональной диагностики.&nbsp;",
        "textMobile": [
            "Чтобы отвечать всем требованиям",
            "современной медицины, мы",
            "используем только качественное",
            "оборудование. Наш прибор УЗИ –",
            "сканер экспертного класса.",
            "Поддержка тканевой гармоники,",
            "сканирование в 4D формате в режиме",
            "реального времени,TEE – эти, и",
            "другие не менее важные преимущества",
            "наглядно выделяют наш УЗИ сканер",
            "среди прочих аналогов. Наш ЭКГ-",
            "аппарат является современным",
            "прибором, позволяющим работать",
            "с электрокардиограммами по всем",
            "нормам функциональной диагностики.",
        ],
        "linkText": "Связаться с нами",
        "advLink": "/home"
    }
];

const HomeForPC = () => {
    return (
        <div className={styles.pageHome}>
            <span/>
            <div className={styles.homeAdvantages}>
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
            </div>
            <span/>
            <Footer/>
            <span/>
        </div>
    )
};

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
                        <span>довольных клиентов являются ярким показателем уровня нашей работы.&nbsp;<Link to="/news">Подробнее об УЗИ</Link></span>
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
                        <span>и международных конференциях в сфере узи, акушерства и гинекологии, и кардиологии.&nbsp;<Link to="/about">Подробнее о нас</Link></span>
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
                        <span>с электрокардиограммами по всем актуальным нормам функциональной диагностики.&nbsp;<Link to="/contacts">Связаться с нами</Link></span>
                    </div>
                </div>
            </div>
        </div>
        <span/>
        <Footer/>
        <span/>
    </div>
);

const HomeForTablet = () => (
    <div className={styles.pageHome}>
        <span/>
        <div className={styles.homeAdvantages}>
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
        </div>
        <span/>
        <Footer/>
        <span/>
    </div>
);

const HomeForMobile = () => (
    <div className={styles.pageHome}>
        <span/>
        <div className={styles.homeAdvantages}>
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
                    <span>Мы уже более 10 лет проводим</span>
                    <span>ультразвуковые исследования и</span>
                    <span>оказываем услуги по ЭКГ, опираясь</span>
                    <span>как на собственный опыт, так и на</span>
                    <span>основные врачебные стандарты.</span>
                    <span>Более 25 лет практики в терапии.</span>
                    <span>Также, более 25 лет практики в</span>
                    <span>функциональной диагностике</span>
                    <span>в сфере клинической электро-</span>
                    <span>кардиографии – всё это позволяет</span>
                    <span>нам быстро и качественно,</span>
                    <span>оказывать наши услуги.</span>
                    <span>Свыше 12 000 довольных клиентов</span>
                    <span>являются ярким показателем</span>
                    <span>уровня нашей работы.</span>
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
                    <span>Наш ведущий специалист</span>
                    <span>Попкова Ольга Николаевна</span>
                    <span>является врачом ультразвуковой</span>
                    <span>диагностики с 10-летним стажем.</span>
                    <span>Обладает более чем 30 дипломами,</span>
                    <span>сертификатами и документами,</span>
                    <span>подтверждающими навыки и</span>
                    <span>высокий уровень профессионализма.</span>
                    <span>Также, имеет 2 международных</span>
                    <span>сертификата фондамедицины плода</span>
                    <span>(The Fetal Medicine Foundation)</span>
                    <span>Принимала неоднократное участие</span>
                    <span>во всероссийских и международных</span>
                    <span>конференциях в сфере кардиологии,</span>
                    <span>узи, акушерства и гинекологии.</span>
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
                    <span>Чтобы отвечать всем требованиям</span>
                    <span>современной медицины, мы</span>
                    <span>используем только качественное</span>
                    <span>оборудование. Наш прибор УЗИ –</span>
                    <span>сканер экспертного класса.</span>
                    <span>Поддержка тканевой гармоники,</span>
                    <span>сканирование в 4D формате в режиме</span>
                    <span>реального времени,TEE – эти, и</span>
                    <span>другие не менее важные преимущества</span>
                    <span>наглядно выделяют наш УЗИ сканер</span>
                    <span>среди прочих аналогов. Наш ЭКГ-</span>
                    <span>аппарат является современным</span>
                    <span>прибором, позволяющим работать</span>
                    <span>с электрокардиограммами по всем</span>
                    <span>нормам функциональной диагностики.</span>
                </div>
                <div className={styles.homeAdvantageTemplateLink}><Link to="/contacts">Связаться с нами</Link></div>
            </div>
        </div>
        <span/>
        <FooterMobile/>
        <span/>
    </div>
);

class Home extends React.Component<{}, {
    test?: boolean,
    jsonData?: any
}> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            test: false,
            jsonData: {}
        }
    }

    // componentDidMount() {
    //     fetch('/static/json/example.json')
    //         .then(res => res.json())
    //         .then((jsonData) => this.setState({jsonData}));
    // }
    //
    // getBooks (last: boolean = false) {
    //     const {jsonData} = this.state;
    //
    //     if (!jsonData.books) {
    //         return [];
    //     }
    //
    //     return jsonData.books.map((b: any, i: number) => (
    //         <>
    //             <AdvantageTemplate data={b} key={b.id}/>
    //             {!last &&<span className={styles.homeAdvantageSeparator}/>}
    //         </>
    //
    //     ));
    // }


    public render(): React.ReactNode {

        const accumulator: string[] = [];

        return (
            <>
                {Advantages.reduce((accumulator, current) => {
                    accumulator.length && accumulator.push(44);
                    accumulator.push(<AdvantageTemplate advantage={current}/>);
                    return accumulator;
                },
                    []
                )}
                {/*{this.getBooks()}*/}
                {/*{this.getBooks()}*/}
                {/*{this.getBooks(true)}*/}
                {/*<Desktop>*/}
                {/*    <HomeForPC/>*/}
                {/*</Desktop>*/}
                {/*<Laptop>*/}
                {/*    <HomeForLaptop/>*/}
                {/*</Laptop>*/}
                {/*<Tablet>*/}
                {/*    <HomeForTablet/>*/}
                {/*</Tablet>*/}
                {/*<Mobile>*/}
                {/*    <HomeForMobile/>*/}
                {/*</Mobile>*/}
            </>
        );
    }
}

export default Home;