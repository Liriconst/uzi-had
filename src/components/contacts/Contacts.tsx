import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import styles from "./Contacts.module.scss";
import {
    Desktop,
    LaptopMin,
    Mobile,
    MobileMax479,
    MobileMin480,
    WithoutDesktop,
    WithoutMobile
} from "../../responsiveModule";

const zoom = 17;
const coordinateX = 44.422930;
const coordinateY = 39.532857;

const mapState = { center: [coordinateX, coordinateY], zoom: zoom};
const placemark = [44.423044, 39.536405];

class Contacts extends React.Component<{}, {
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
            <div className={styles.pageContacts}>
                <span/>
                <div className={styles.contactsInfoBlock}>
                    <span/>
                    <Desktop>
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
                            </div>
                        </div>
                        <span/>
                        <div className={styles.contactsInfoImgBlock}>
                            <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
                            <span className={styles.contactsInfoImgSubscription}>г. Хадыженск, ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6</span>
                        </div>
                    </Desktop>
                    <WithoutDesktop>
                        <div className={styles.contactsInfoBlockExtra}>
                            <div className={styles.contactsInfoImgBlock}>
                                <span className={styles.contactsInfoImg}><img src="/static/img/back-example.png" alt={""}/></span>
                                <WithoutMobile><span className={styles.contactsInfoImgSubscription}>г. Хадыженск, ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6</span></WithoutMobile>
                            </div>
                            <Desktop><span/></Desktop>
                            <div className={styles.contactsInfo}>
                                <span className={styles.contactsInfoHeader}>Хадыженск</span>
                                <span className={styles.contactsInfoSeparator}/>
                                <div className={styles.contactsInfoTextBlock}>
                                    <MobileMin480>
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
                                    </MobileMin480>
                                    <MobileMax479>
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
                                                <div className={styles.contactsInfoTextBlockContainerRightAdd} style={{display: "flex", flexDirection: "column"}}>
                                                    <div className={styles.contactsInfoText}><span>График работы:</span></div>
                                                    <span className={styles.contactsInfoText}>Пн-Ср: 9:00 – 17:00</span>
                                                    <span className={styles.contactsInfoText}>Пт: 9:00 – 17:00</span>
                                                </div>
                                                <div className={styles.contactsInfoTextBlockContainerRightAdd} style={{display: "flex", flexDirection: "column"}}>
                                                    <span className={styles.contactsInfoText} style={{height: "100%"}}/>
                                                    <span className={styles.contactsInfoText}>Сб-Вс: выходной</span>
                                                    <span className={styles.contactsInfoText}>Чт: выходной</span>
                                                </div>
                                            </div>
                                            <span/>
                                            <div className={styles.contactsInfoButtonContainer}>
                                                <span className={styles.contactsInfoButton}><Link to="/news">Записаться online</Link></span>
                                            </div>
                                        </div>
                                        <span/>
                                    </MobileMax479>
                                </div>
                            </div>
                        </div>
                    </WithoutDesktop>
                    <span/>
                </div>
                <span/>
                <div className={styles.contactsMap}>
                    <YMaps>
                        <Map className={styles.contactsMapBlock} state={mapState}>
                            <Placemark
                                geometry={placemark}
                                properties={{
                                    iconCaption: 'Медицинский центр "Южный"',
                                }}
                                options={{
                                    preset: 'islands#blueDotIconWithCaption',
                                }}
                            />
                            <ZoomControl options={{ float: 'right' }} />
                        </Map>
                    </YMaps>;
                    <LaptopMin>
                        <div className={styles.contactsMapInfo}>
                            <div className={styles.contactsMapInfoHeader}>Адрес</div>
                            <div className={styles.contactsMapInfoText}><span>г. Хадыженск, ул. Первомайская,</span></div>
                            <div className={styles.contactsMapInfoText}>д. 103 "А", 2 этаж, кабинет 6</div>
                            <div className={styles.contactsMapInfoHeader}>Контакты</div>
                            <div className={styles.contactsMapInfoText}><span>+7(918)177-24-17</span></div>
                            <div className={styles.contactsMapInfoText}>example@gmail.com</div>
                        </div>
                    </LaptopMin>
                </div>
            </div>
        );
    };
};

export default Contacts;