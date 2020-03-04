import * as React from "react";
import styles from "./Ymaps.module.scss";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";

const zoom = 16;

const mapState = { center: [44.423029, 39.531112], zoom: zoom};
const placemark = [44.423044, 39.536405];

class YmapLaptop extends React.Component<{
    location?: any;
}> {

    public render(): React.ReactNode {
        const {location} = this.props;

        return (
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
                </YMaps>
                <div className={styles.contactsMapInfo}>
                    <div className={styles.contactsMapInfoHeader}>Адрес</div>
                    <div className={styles.contactsMapInfoText}>г. Хадыженск, ул. Первомайская,</div>
                    <div className={styles.contactsMapInfoText}>д. 103 "А", 2 этаж, кабинет 6</div>
                    <div className={styles.contactsMapInfoHeader}>Контакты</div>
                    <div className={styles.contactsMapInfoText}>+7(918)177-24-17</div>
                    <div className={styles.contactsMapInfoText}><span>example@gmail.com</span></div>
                </div>
            </div>
        );
    };
};

export default YmapLaptop;