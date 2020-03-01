import * as React from "react";
import styles from "./Pricelist.module.scss";
import {
    Desktop,
    Laptop,
    Tablet,
    Mobile,
    WithoutLaptop,
    WithoutMobile,
    LaptopMin920,
    LaptopMax919
} from "../../responsiveModule";
import { Query } from "react-apollo";
import { ApolloError } from "apollo-boost";
import gql from "graphql-tag";
import moment from "moment";
import minuteParser from "../../minuteParser";

const GET_PRICE = gql`
    query {
        allPriceInfos(orderBy: ID_ASC) {
            nodes {
                phoneNumber
                priceData
            }
        }
        allPriceLists(orderBy: SERIAL_NUMBER_ASC) {
            nodes {
                serialNumber
                surveyName
                surveyTime
                surveyPrice
            }
        }
    }
`;

// function minuteParse() {
//     let minuteCount = 27;
// }

class Pricelist extends React.Component<{}, {
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
            <Query query={GET_PRICE}>
                {({loading, error, data}: {loading: boolean, error?: ApolloError, data: any}) => {
                    if (loading) return <span>"Загрузка новостей...";</span>;
                    if (error) return <span>`Ошибка! ${error.message}`</span>;
                    console.log(data);
                    return (
                        <div className={styles.priceListPage}>
                            <div className={styles.priceListHeader}>
                                <div className={styles.priceListPreview}>
                                    <span>ИП Попкова О.Н.</span>
                                    <WithoutMobile>
                                        <span>Краснодарский край, Апшеронский район, город Хадыженск</span>
                                        <span>ул. Первомайская, д. 103 "А", 2 этаж, кабинет 6. {data.allPriceInfos.nodes[0].phoneNumber}</span>
                                    </WithoutMobile>
                                    <Mobile>
                                        <span style={{fontSize: "15px"}}>Краснодарский к-й, Апшеронский р-н,</span>
                                        <span style={{fontSize: "15px"}}>г. Хадыженск, ул. Первомайская, д. 103 "А",</span>
                                        <span style={{fontSize: "15px"}}>2 этаж, кабинет 6. {data.allPriceInfos.nodes[0].phoneNumber}</span>

                                    </Mobile>
                                </div>
                                <div className={styles.priceListTitle}>
                                    <WithoutMobile>
                                        <span>СТОИМОСТЬ ПРЕДОСТАВЛЯЕМЫХ УСЛУГ С {moment(data.allPriceInfos.nodes[0].priceData).format("DD.MM.YYYY")}</span>
                                    </WithoutMobile>
                                    <Mobile>
                                        <span style={{fontSize: "18px"}}>СТОИМОСТЬ ПРЕДОСТАВЛЯЕМЫХ</span>
                                        <span style={{fontSize: "18px"}}>УСЛУГ С {moment(data.allPriceInfos.nodes[0].priceData).format("DD.MM.YYYY")}</span>
                                    </Mobile>
                                </div>
                            </div>
                            <div className={styles.priceListTableHeader}>
                                {/*<LaptopMin920>*/}
                                {/*    <span className={styles.tableHeaderText}>Наименование обследования</span>*/}
                                {/*    <span className={styles.tableHeaderSeparator2}/>*/}
                                {/*    <span className={styles.tableHeaderText}>Продолжительность</span>*/}
                                {/*    <span className={styles.tableHeaderSeparator2}/>*/}
                                {/*    <span className={styles.tableHeaderText}>Стоимость</span>*/}
                                {/*</LaptopMin920>*/}
                                {/*<LaptopMax919>*/}
                                    <span className={styles.tableHeaderName}>Наименование обследования</span>
                                    <span className={styles.tableHeaderSeparator} style={{height: "1px", width: "calc(100% - 10px)", margin: "0 5px"}}/>
                                    <span className={styles.tableHeaderTime}>Продолжительность</span>
                                    <span className={styles.tableHeaderSeparator} style={{height: "40px", width: "1px", marginTop: "50px"}}/>
                                    <span className={styles.tableHeaderPrice}>Стоимость</span>
                                {/*</LaptopMax919>*/}
                            </div>
                            {data.allPriceLists.nodes.map((queryPrice: any) => (
                                <div className={styles.priceListTable}>
                                    <span className={styles.newsTitle}>{queryPrice.surveyName}</span>
                                    <span className={styles.newsTitle}>{minuteParser(queryPrice.surveyTime)}</span>
                                    <span className={styles.newsTitle}>{queryPrice.surveyPrice}</span>
                                </div>
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Pricelist;