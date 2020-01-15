import * as React from "react";
import {Link} from "react-router-dom";
import autobind from "autobind-decorator";
import styles from "./Reviews.module.scss";
import {Select, Modal, Button, Input} from 'antd';
import "./Reviews.scss";

const {Option} = Select;
const {TextArea} = Input;

function countDown() {
    let secondsToGo = 10;

    const modal = Modal.success({
        title: 'Благодарим за ваш отзыв!',
        okText: 'Понятно',
        className: 'reviewsWarning',
        content: (<div>
            Ваш отзыв будет опубликован после модерации.
            Это окно закроется через {secondsToGo} сек.
        </div>),
    });

    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: (<div>
                Ваш отзыв будет опубликован после модерации.
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
            visible: true,
            visible2: false,
            loading: false
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
                    <div className="reviewsSelect">
                        <Select onChange={this.onModeChange} value={this.state.mode}
                                dropdownClassName="reviewsDropdown">
                            <Option value="all">Все отзывы</Option>
                            <Option value="pos">Позитивные отзывы</Option>
                            <Option value="neg">Негативные отзывы</Option>
                        </Select>
                    </div>
                    <div className="reviewsModal">
                        <Button type="primary" onClick={this.showModal}>
                            Оставить отзыв
                        </Button>
                        <Modal
                            title="Ваш отзыв"
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            footer={[
                                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                                    Оставить отзыв
                                </Button>,
                            ]}
                            wrapClassName="reviewsWrap"
                        >
                            <div className={styles.reviewsFeedbackHeader}>Введите ваше имя:</div>
                            <Input placeholder="Ваше имя..."/>
                            <div className={styles.reviewsFeedbackHeader2}><span>Введите ваш отзыв:</span></div>
                            <TextArea placeholder="Текст отзыва..." autoSize={{minRows: 3}}/>
                        </Modal>
                    </div>
                </div>
                <div className={styles.reviewsBlock}>
                    <div className={styles.reviewsTime}>
                        <span className={styles.reviewsTimeText}>26.11</span>
                        <span className={styles.reviewsTimeText}>2019</span>
                    </div>
                    <div className={styles.reviewsMain}>
                        <span className={styles.reviewsHeader}>НОВОСТЬ №1</span>
                        <span className={styles.reviewsText}>Равным образом реализация намеченного плана развития играет важную роль в формировании форм воздействия! Задача организации, в особенности роль в</span>
                        <span className={styles.reviewsText}>формировании форм воздействия! Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение системы</span>
                        <span className={styles.reviewsText}>масштабного изменения ряда параметров? Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и</span>
                        <span className={styles.reviewsText}>модернизации системы обучения кадров, соответствующей насущным потребностям. Дорогие друзья, социально-экономическое развитие...&nbsp;
                            <Link to="/contacts">Читать далее</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;