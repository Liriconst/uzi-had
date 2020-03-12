import * as React from "react";
import {Link} from "react-router-dom";
import styles from "./Footer.module.scss";
import autobind from "autobind-decorator";
import {Button, Modal} from "antd";
import WrappedBackCallAdd from "./BackCallAdd";

class FooterMobile extends React.Component<{}, {
    mode?: string,
    visible?: boolean,
    loading?: boolean
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            mode: 'all',
            visible: false,
            loading: false
        };
    }

    @autobind
    private showModal() {
        this.setState({visible: true});
    };

    @autobind
    private handleCancel() {
        this.setState({visible: false});
    };

    public render(): React.ReactNode {
        return (
            <div className={styles.Footer}>
                <div className={styles.FooterButtons}>
                    <div className={styles.FooterButtonTemplate}><Link to="/news">Отзывы</Link></div>
                    <div className={styles.FooterButtonSeparator}>ИЛИ</div>
                    <div className="footerModal">
                        <Button type="primary" onClick={this.showModal} className={styles.footerButtonAdd}>
                            Обратный звонок
                        </Button>
                        <Modal
                            title="Обратный звонок"
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            wrapClassName="footerWrap"
                        >
                            <WrappedBackCallAdd onCancel={this.handleCancel}/>
                        </Modal>
                    </div>
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