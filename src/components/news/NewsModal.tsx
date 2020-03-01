import * as React from "react";
import { Button, Modal } from "antd";
import "./News.scss";
import styles from "./News.module.scss";

class NewsModal extends React.Component<any, any> {
    render() {
        const { news, isVisible, onClose } = this.props;
        return (
            <Modal
                visible={ isVisible }
                onCancel={ onClose }
                footer={[
                    <Button className={"newsButtonInModal"} key="submit" type="primary" onClick={onClose}>Закрыть</Button>
                ]}
                className={"newsModal"}>
                <div className={styles.newsTitleInModal}>{ news.title }</div>
                <div className={styles.newsFullTextInModal}>{ news.fullText }</div>
            </Modal>
        );
    }
}

export default NewsModal;