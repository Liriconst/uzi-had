import * as React from "react";
import {Link} from "react-router-dom";
import styles from "./Footer.module.scss";

class FooterMobile extends React.Component<{}, {
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
            <div className={styles.Footer}>
                <div className={styles.FooterButtons}>
                    <div className={styles.FooterButtonTemplate}><Link to="/news">Отзывы</Link></div>
                    <div className={styles.FooterButtonSeparator}>ИЛИ</div>
                    <div className={styles.FooterButtonTemplate}><Link to="/news">Обратный звонок</Link></div>
                </div>
                <div className={styles.FooterRemark}>
                    <span>Нажимая на кнопку "Обратный звонок", Вы даете Согласие на</span>
                    <span>обработку персональных данных на&nbsp;<span className={styles.FooterRemarkLink}><Link to="/news">следующих условиях</Link></span></span>
                </div>
            </div>
        );
    }
}

export default FooterMobile;