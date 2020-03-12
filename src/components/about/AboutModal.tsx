import * as React from "react";
import { Button, Modal } from "antd";
import "./About.scss";
import styles from "./About.module.scss";

class AboutModal extends React.Component<any, any> {
    render() {
        const { about, isVisible, onClose } = this.props;
        return (
            <Modal
                visible={ isVisible }
                onCancel={ onClose }
                footer={[
                    <Button className={"aboutButtonInModal"} key="submit" type="primary" onClick={onClose}>Закрыть</Button>
                ]}
                className={"aboutModal"}
                wrapClassName={"aboutModal"}>
                <div className={(about.rotate) ? styles.aboutImgModalVertical : styles.aboutImgModalHorizontal} ><img src={about.linkImg} alt=""/></div>
                <div className={styles.aboutTitleInModal}>{ about.title }</div>
            </Modal>
        );
    }
}

export default AboutModal;