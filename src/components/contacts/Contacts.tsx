import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Contacts.module.scss";
import {Desktop, WithoutDesktop, Laptop, TabletAndLaptop, SmallTablet, MobileMin480, MobileMax479} from "../../responsiveModule";
import YmapDesktop from "../ymaps/YmapDesktop";
import YmapLaptop from "../ymaps/YmapLaptop";
import YmapTablet from "../ymaps/YmapTablet";
import YmapMobile from "../ymaps/YmapMobile";

const ContactsForDesktop = () => (
    <div className={styles.contactsInfoBlock}>
        <span/>
        <div className={styles.contactsInfo}>
            <span className={styles.contactsInfoHeader}>Хадыженск</span>
            <span className={styles.contactsInfoSeparator}/>
            <div className={styles.contactsInfoTextBlock}>
                <div className={styles.contactsInfoTextBlockContainerLeft}>
                    <span className={styles.contactsInfoText}>352680, Краснодарский край,</span>
                    <span className={styles.contactsInfoText}>г. Хадыженск, ул. Первомайская,</span>
                    <span className={styles.contactsInfoText}>д. 103 "А", 2 этаж, кабинет 6</span>
                    <span/>
                    <div className={styles.contactsInfoText}><span>+7(918)177-24-17</span></div>
                    <span/>
                    <div className={styles.contactsInfoButtonContainer}>
                        <span className={styles.contactsInfoButton}><Link to="/news">Посмотреть отзывы</Link></span>
                        <span/>
                    </div>
                </div>
                <div className={styles.contactsInfoTextBlockContainerRight}>
                    <div className={styles.contactsInfoText}><span>График работы:</span></div>
                    <span className={styles.contactsInfoText}>Пн-Ср: 9:00 – 17:00</span>
                    <span className={styles.contactsInfoText}>Пт: 9:00 – 17:00</span>
                    <span className={styles.contactsInfoText}>Сб-Вс: выходной</span>
                    <span className={styles.contactsInfoText}>Чт: выходной</span>
                </div>
            </div>
        </div>
        <span/>
        <div className={styles.contactsInfoImgBlock}>
            <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
            <span className={styles.contactsInfoImgSubscription}>г. Хадыженск, ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6</span>
        </div>
        <span/>
    </div>
);

const ContactsForPortable = () => (
    <div className={styles.contactsInfoBlock}>
        <span/>
        <div className={styles.contactsInfoBlockExtra}>
            <div className={styles.contactsInfoImgBlock}>
                <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
                <TabletAndLaptop><span className={styles.contactsInfoImgSubscription}>г. Хадыженск, ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6</span></TabletAndLaptop>
            </div>
            <div className={styles.contactsInfo}>
                <span className={styles.contactsInfoHeader}>Хадыженск</span>
                <span className={styles.contactsInfoSeparator}/>
                <MobileMin480><ContextForMaxMobile/></MobileMin480>
                <MobileMax479><ContextForMinMobile/></MobileMax479>
            </div>
        </div>
        <span/>
    </div>
);

const ContextForMaxMobile = () => (
    <div className={styles.contactsInfoTextBlock}>
        <span/>
            <div className={styles.contactsInfoTextBlockContainerLeft}>
                <span className={styles.contactsInfoText}>352680, Краснодарский край,</span>
                <span className={styles.contactsInfoText}>г. Хадыженск, ул. Первомайская,</span>
                <span className={styles.contactsInfoText}>д. 103 "А", 2 этаж, кабинет 6</span>
                <span/>
                <div className={styles.contactsInfoText}><span>+7(918)177-24-17</span></div>
                <span/>
                <div className={styles.contactsInfoButtonContainer}>
                    <span className={styles.contactsInfoButton}><Link to="/news">Посмотреть отзывы</Link></span>
                    <span/>
                </div>
            </div>
            <div className={styles.contactsInfoTextBlockContainerRight}>
                <div className={styles.contactsInfoText}><span>График работы:</span></div>
                <span className={styles.contactsInfoText}>Пн-Ср: 9:00 – 17:00</span>
                <span className={styles.contactsInfoText}>Пт: 9:00 – 17:00</span>
                <span className={styles.contactsInfoText}>Сб-Вс: выходной</span>
                <span className={styles.contactsInfoText}>Чт: выходной</span>
            </div>
        <span/>
    </div>
);

const ContextForMinMobile = () => (
    <div className={styles.contactsInfoTextBlock}>
        <span/>
        <div className={styles.contactsInfoTextBlockExtra}>
            <div className={styles.contactsInfoTextBlockContainerLeft}>
                <span className={styles.contactsInfoText}>352680, Краснодарский край,</span>
                <span className={styles.contactsInfoText}>г. Хадыженск, ул. Первомайская,</span>
                <span className={styles.contactsInfoText}>д. 103 "А", 2 этаж, кабинет 6</span>
                <div className={styles.contactsInfoText}><span>+7(918)177-24-17</span></div>
                <span/>
            </div>
            <div className={styles.contactsInfoTextBlockContainerRight}>
                <div className={styles.contactsInfoTextBlockContainerRightAdd}>
                    <div className={styles.contactsInfoText}><span>График работы:</span></div>
                    <span className={styles.contactsInfoText}>Пн-Ср: 9:00 – 17:00</span>
                    <span className={styles.contactsInfoText}>Пт: 9:00 – 17:00</span>
                </div>
                <div className={styles.contactsInfoTextBlockContainerRightAdd}>
                    <span className={styles.contactsInfoText}>Сб-Вс: выходной</span>
                    <span className={styles.contactsInfoText}>Чт: выходной</span>
                    <span className={styles.contactsInfoText}/>
                </div>
            </div>
            <div className={styles.contactsInfoButtonContainer}>
                <span className={styles.contactsInfoButton}><Link to="/news">Посмотреть отзывы</Link></span>
            </div>
        </div>
        <span/>
    </div>
);


class Contacts extends React.Component<{
    location?: any;
}> {

    public render(): React.ReactNode {
        const {location} = this.props;

        return (
            <div className={styles.pageContacts}>
                <span/>
                <Desktop>
                    <ContactsForDesktop/>
                    <span/>
                    <YmapDesktop/>
                </Desktop>
                <WithoutDesktop>
                    <ContactsForPortable/>
                    <span/>
                    <Laptop><YmapLaptop/></Laptop>
                    <SmallTablet><YmapTablet/></SmallTablet>
                    <YmapMobile/>
                </WithoutDesktop>
            </div>
        );
    };
};

export default Contacts;