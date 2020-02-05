import * as React from "react";
import {Link} from "react-router-dom";
import styles from "./Footer.module.scss";

class Footer extends React.Component<{}, {
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
                    <div className={styles.FooterButtonTemplate}><Link to="/news">Посмотреть отзывы</Link></div>
                    <div className={styles.FooterButtonSeparator}>ИЛИ</div>
                    <div className={styles.FooterButtonTemplate}><Link to="/news">Заказать звонок</Link></div>
                </div>
                <div className={styles.FooterRemark}>Нажимая на кнопку "Заказать звонок", Вы даете Согласие на обработку персональных данных на&nbsp;<span className={styles.FooterRemarkLink}><Link to="/news">следующих условиях</Link></span></div>
            </div>
        );
    }
}

export default Footer;