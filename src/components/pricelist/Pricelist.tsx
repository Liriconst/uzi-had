import * as React from "react";
import styles from "./Pricelist.module.scss";
import { Mobile, WithoutMobile, LaptopMin920, LaptopMax919 } from "../../responsiveModule";
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
                    if (loading) return <span>Загрузка прайс-листа...</span>;
                    if (error) return <span>Ошибка! ${error.message}</span>;
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
                            <LaptopMin920>
                                <div className={styles.priceListTableHeader}>
                                    <span className={styles.tableHeaderText}>Наименование обследования</span>
                                    <span className={styles.tableHeaderSeparator} style={{height: "55px", width: "1px", padding: "5px 0"}}/>
                                    <span className={styles.tableHeaderText}>Время</span>
                                    <span className={styles.tableHeaderSeparator} style={{height: "55px", width: "1px", padding: "5px 0"}}/>
                                    <span className={styles.tableHeaderText}>Стоимость</span>
                                </div>
                            </LaptopMin920>
                            <LaptopMax919>
                                <div className={styles.priceListTableHeaderMobilePart1}>
                                    <span className={styles.tableHeaderText}>Наименование обследования</span>
                                    <span className={styles.tableHeaderSeparator} style={{height: "1px", width: "calc(100% - 10px)", padding: "0 5px"}}/>
                                </div>
                                <div className={styles.priceListTableHeaderMobilePart2}>
                                    <span className={styles.tableHeaderText}>Время</span>
                                    <span className={styles.tableHeaderSeparator} style={{height: "40px", width: "1px", padding: "5px 0"}}/>
                                    <span className={styles.tableHeaderText}>Стоимость</span>
                                </div>
                            </LaptopMax919>
                            {data.allPriceLists.nodes.map((queryPrice: any) => (
                                <>
                                <LaptopMin920>
                                    <div className={styles.priceListTable}>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                        <span className={styles.tableTextHeader}>{queryPrice.surveyName}</span>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px", marginLeft: "1px"}}/>
                                        <span className={styles.tableText}>{minuteParser(queryPrice.surveyTime)}</span>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px", marginLeft: "1px"}}/>
                                        <span className={styles.tableText}>{queryPrice.surveyPrice}</span>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                    </div>
                                    <span className={styles.tableSeparatorHorizontal}/>
                                </LaptopMin920>
                                <LaptopMax919>
                                    <div className={styles.priceListTableMobilePart1}>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                        <span className={styles.tableTextHeader}>{queryPrice.surveyName}</span>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                    </div>
                                    <span className={styles.tableSeparatorHorizontal}/>
                                    <div className={styles.priceListTableMobilePart2}>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                        <span className={styles.tableText}>{minuteParser(queryPrice.surveyTime)}</span>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                        <span className={styles.tableText}>{queryPrice.surveyPrice}</span>
                                        <span className={styles.tableSeparator} style={{height: "100%", width: "1px"}}/>
                                    </div>
                                    <span className={styles.tableSeparatorHorizontal}/>
                                </LaptopMax919>
                                </>
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Pricelist;