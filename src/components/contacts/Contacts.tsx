import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from "./Contacts.module.scss";

const mapState = { center: [44.423044, 39.536405], zoom: 17};

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
                <div className={styles.contactsInfo}>
                    <div className={styles.contactsPart1}>
                        <span className={styles.contactsPart1Header}>Хадыженск</span>
                        <span className={styles.contactsPart1Separator}/>
                        <div className={styles.contactsPart1Blocks}>
                            <div className={styles.contactsPart1Block1}>
                                <span className={styles.contactsBlock1Text}>352680, Краснодарский край,</span>
                                <span className={styles.contactsBlock1Text}>г. Хадыженск, ул. Первомайская,</span>
                                <span className={styles.contactsBlock1Text}>д. 103 "А", 2 этаж, кабинет 6</span>
                                <span className={styles.contactsBlock1Phone}>+7(918)177-24-17</span>
                                <span className={styles.contactsBlock1Button}><Link to="/news">Записаться online</Link></span>
                            </div>
                            <div className={styles.contactsPart1Block2}>
                                <span className={styles.contactsBlock2Schedule}>График работы:</span>
                                <span className={styles.contactsBlock2Text}>Пн-Ср: 9:00 – 17:00</span>
                                <span className={styles.contactsBlock2Text}>Пт: 9:00 – 17:00</span>
                                <span className={styles.contactsBlock2Text}>Сб-Вс: выходной</span>
                                <span className={styles.contactsBlock2Text}>Чт: выходной</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactsPart2}>
                        <span className={styles.contactsPart2Img}><img src="/static/img/back-example.png" alt={""}/></span>
                        <span className={styles.contactsPart2Text}>г. Хадыженск, ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6</span>
                    </div>
                </div>
                <span className={styles.contactsInfoSeparator}/>
                <div className={styles.contactsMap}>
                    <YMaps>
                        <Map className={styles.contactsMapBlock} state={mapState}>
                            <Placemark
                                geometry={mapState.center}
                                properties={{
                                    iconCaption: 'Медицинский центр "Южный"',
                                }}
                                options={{
                                    preset: 'islands#blueDotIconWithCaption',
                                }}
                            />
                        </Map>
                    </YMaps>;
                    <div className={styles.contactsMapInfo}>
                        <div className={styles.contactsMapInfoHeader}>Адрес</div>
                        <div className={styles.contactsMapInfoText}><span>г. Хадыженск, ул. Первомайская,</span></div>
                        <div className={styles.contactsMapInfoText}>д. 103 "А", 2 этаж, кабинет 6</div>
                        <div className={styles.contactsMapInfoHeader}>Контакты</div>
                        <div className={styles.contactsMapInfoText}><span>+7(918)177-24-17</span></div>
                        <div className={styles.contactsMapInfoText}>example@gmail.com</div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Contacts;