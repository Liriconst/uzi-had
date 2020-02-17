import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import styles from "./Contacts.module.scss";
import {
    Desktop, DesktopAndLaptop, DesktopMax, Laptop,
    LaptopMin,
    Mobile, Mobile480x559,
    MobileMax479, SmallTablet, Tablet, TabletAndLaptop,
    WithoutDesktop,
    WithoutMobile
} from "../../responsiveModule";
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

const ContactsForTabletAndLaptop = () => (
    <div className={styles.contactsInfoBlock}>
        <span/>
        <div className={styles.contactsInfoBlockExtra}>
            <div className={styles.contactsInfoImgBlock}>
                <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
                <span className={styles.contactsInfoImgSubscription}>г. Хадыженск, ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6</span>
            </div>
            <div className={styles.contactsInfo}>
                <span className={styles.contactsInfoHeader}>Хадыженск</span>
                <span className={styles.contactsInfoSeparator}/>
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
                            <span className={styles.contactsInfoButton}><Link to="/news">Записаться online</Link></span>
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
            </div>
        </div>
        <span/>
    </div>
);

const ContactsForMaxMobile = () => (
    <div className={styles.contactsInfoBlock}>
        <span/>
        <div className={styles.contactsInfoBlockExtra}>
            <div className={styles.contactsInfoImgBlock}>
                <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
            </div>
            <div className={styles.contactsInfo}>
                <span className={styles.contactsInfoHeader}>Хадыженск</span>
                <span className={styles.contactsInfoSeparator}/>
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
                            <span className={styles.contactsInfoButton}><Link to="/news">Записаться online</Link></span>
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
            </div>
        </div>
        <span/>
    </div>
);

const ContactsForMinMobile = () => (
    <div className={styles.contactsInfoBlock}>
        <span/>
        <div className={styles.contactsInfoBlockExtra}>
            <div className={styles.contactsInfoImgBlock}>
                <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
            </div>
            <div className={styles.contactsInfo}>
                <span className={styles.contactsInfoHeader}>Хадыженск</span>
                <span className={styles.contactsInfoSeparator}/>
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
                            <span className={styles.contactsInfoButton}><Link to="/news">Записаться online</Link></span>
                        </div>
                    </div>
                    <span/>
                </div>
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
                <TabletAndLaptop>
                    <ContactsForTabletAndLaptop/>
                    <span/>
                    <Laptop><YmapLaptop/></Laptop>
                    <SmallTablet><YmapTablet/></SmallTablet>
                </TabletAndLaptop>
                <Mobile480x559>
                    <ContactsForMaxMobile/>
                    <span/>
                    <YmapMobile/>
                </Mobile480x559>
                <MobileMax479>
                    <ContactsForMinMobile/>
                    <span/>
                    <YmapMobile/>
                </MobileMax479>
            </div>
        );
    };
};

export default Contacts;