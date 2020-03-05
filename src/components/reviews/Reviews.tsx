import * as React from "react";
import {Link} from "react-router-dom";
import autobind from "autobind-decorator";
import styles from "./Reviews.module.scss";
import {Select, Modal, Button, Input} from 'antd';
import "./Reviews.scss";
import WrappedReviewsAdd from "./ReviewsAdd";
import ReviewsAll from "./ReviewsAll";

const {Option} = Select;
const {TextArea} = Input;

function countDown() {
    let secondsToGo = 10;

    const modal = Modal.success({
        title: 'Новость успешно добавлена!',
        okText: 'Понятно',
        className: 'newsWarning',
        content: (<div>
            Новость была успешно добавлена.
            Это окно закроется через {secondsToGo} сек.
        </div>),
    });

    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: (<div>
                Новость была успешно добавлена.
                Это окно закроется через {secondsToGo} сек.
            </div>),
        });
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
    }, secondsToGo * 1000);
}

class Reviews extends React.Component<{}, {
    mode?: string,
    visible?: boolean,
    visible2?: boolean,
    loading?:boolean
}> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            mode: 'all',
            visible: false,
            visible2: false,
            loading: false,

        };
    }

    @autobind
    private onModeChange(mode: string) {
        this.setState({mode});
    }

    @autobind
    private showModal() {
        this.setState({visible: true});
    };

    @autobind
    private handleOk() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 1000);
        setTimeout(() => {
            countDown();
        }, 1500);
    };

    @autobind
    private handleCancel() {
        this.setState({visible: false});
    };

    public render(): React.ReactNode {
        return (
            <div className={styles.pageReviews}>
                <div className={styles.reviewsButtons}>
                    <div className="newsModal">
                        <Button type="primary" onClick={this.showModal}>
                            Добавить новость
                        </Button>
                        <Modal
                            title="Ваш отзыв"
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            wrapClassName="reviewsWrap"
                        >
                            <WrappedReviewsAdd onCancel={this.handleCancel}/>
                        </Modal>
                    </div>
                </div>
                {/*<div className={styles.newsShowBlock}/>*/}
                <ReviewsAll/>
            </div>
        );
    }
}

export default Reviews;