import * as React from "react";
import styles from "./Ymaps.module.scss";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";

const zoom = 16;

const mapState = { center: [44.423044, 39.536405], zoom: zoom};
const placemark = [44.423044, 39.536405];

class YmapTablet extends React.Component<{
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
            </div>
        );
    };
};

export default YmapTablet;