import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Home.module.scss";
import {Desktop, Laptop, WithoutLaptop, Tablet, Mobile} from "../../responsiveModule";

class AdvantageTemplate extends React.Component<{}, {
    test?: boolean,
    advantage: {
        id?: number;
        img1?: string;
        img2?: string;
        header1?: string;
        header2?: string;
        headerLaptop?: string;
        textPCTablet?: string[];
        textLaptop?: string[];
        textLaptopEnd: string;
        textMobile?: string[];
        linkText?: string;
        advLink?: string;
    }
}> {
    public render(): React.ReactNode {

        const { img1, img2, header1, header2, headerLaptop, textPCTablet, textLaptop, textLaptopEnd, textMobile, linkText, advLink } = this.state.advantage;

        return (
            <>
                <div className={styles.homeAdvantageTemplate}>
                    <div className={styles.homeAdvantageTemplateIcon}>
                        <div className={styles.homeAdvantageTemplateImg}>
                            <img id={styles.img1} src={img1} alt={""}/>
                            <img id={styles.img2} src={img2} alt={""}/>
                        </div>
                    </div>
                    <Laptop>
                        <div className={styles.homeAdvantageContainer}>
                            <div className={styles.homeAdvantageTemplateHeader}>{headerLaptop}</div>
                            <div className={styles.homeAdvantageTemplateText}>
                                {textLaptop?.map(current => (<span>{current}</span>))}
                                <span>{textLaptopEnd}<Link to={advLink}>{linkText}</Link></span>
                            </div>
                        </div>
                    </Laptop>
                    <WithoutLaptop>
                        <div className={styles.homeAdvantageTemplateHeader}>
                            <span>{header1}</span>
                            <span>{header2}</span>
                        </div>
                        <Desktop>
                            <div className={styles.homeAdvantageTemplateText}>
                                {textPCTablet?.map(current =>(<span>{current}</span>))}
                            </div>
                        </Desktop>
                        <Tablet>
                            <div className={styles.homeAdvantageTemplateText}>
                                {textPCTablet?.map(current =>(<span>{current}</span>))}
                            </div>
                        </Tablet>
                        <Mobile>
                            <div className={styles.homeAdvantageTemplateText}>
                                {textMobile?.map(current =>(<span>{current}</span>))}
                            </div>
                        </Mobile>
                        <div className={styles.homeAdvantageTemplateLink}><Link to={advLink}>{linkText}</Link></div>
                    </WithoutLaptop>
                </div>
            </>
        );
    }
}

export default AdvantageTemplate;