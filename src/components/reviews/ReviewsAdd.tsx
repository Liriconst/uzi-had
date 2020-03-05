import * as React from "react";
import styles from "./Reviews.module.scss";
import {Input, Form, Icon, Button, Rate, notification, InputNumber} from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "./Reviews.scss";
import {FormCreateKostyl} from "../../utils";

const {TextArea} = Input;
const desc = ['Отвратительно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

const ADD_REVIEWS = gql`
  mutation AddReviews ($firstName: String!, $secondName: String!, $reviewText: String!, $reviewMark: Int!) {
    createReview (
        input: {
            review: {
                firstName: $firstName
                secondName: $secondName
                reviewText: $reviewText
                reviewMark: $reviewMark
            }
        }
    ) {
        review {
            id
        }
      }
  }
`;

interface ReviewsAddProps {
    onCancel(): void
    form?: any
}

class ReviewsAdd extends React.Component<ReviewsAddProps, {
    mode?: string,
    visible?: boolean,
    loading?:boolean,
    value?:number
}> {
    public constructor(props: ReviewsAddProps) {
        super(props);
        this.state = {
            mode: 'all',
            visible: false,
            loading: false,
            value: 5
        };
    }

    openNotification = () => {
        notification.open({
            message: 'Отзыв успешно добавлен!',
            description: 'Ваш отзыв был отправлен на модерацию и в скором времени появится на сайте.',
            icon: <Icon type="check-circle" style={{ color: '#52c41a' }} />,
            duration: 6,
        });
    };

    handleSubmit = (createReview: any) => {
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                createReview({ variables: { firstName: values.firstName, secondName: values.secondName, reviewText: values.reviewText, reviewMark: values.reviewMark}});
                this.props.onCancel();
                this.openNotification();
                this.props.form.resetFields();
            }
        });
    };

    handleChange = (value: number) => {
        this.setState({ value });
    };

    public render(): React.ReactNode {
        const { getFieldDecorator } = this.props.form;
        const { value } = this.state;

        return (
            <Mutation mutation={ADD_REVIEWS}>
                {(createReview: any, {}) => (
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{width: "360px !important"}}>
                        <div className={styles.reviewsHeaderTitle}>Введите ваше имя:</div>
                        <Form.Item>
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <Input placeholder="Имя..."/>
                            )}
                        </Form.Item>
                        <div className={styles.reviewsHeaderText}>Введите вашу фамилию:</div>
                        <Form.Item>
                            {getFieldDecorator('secondName', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <Input placeholder="Фамилия..."/>
                            )}
                        </Form.Item>
                        <div className={styles.reviewsHeaderText}>Введите ваш отзыв:</div>
                        <Form.Item>
                            {getFieldDecorator('reviewText', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <TextArea placeholder="Текст отзыва..." autoSize={{minRows: 3}}/>
                            )}
                        </Form.Item>
                        <div className={styles.reviewsHeaderText}>Введите оценку:</div>
                        <div className={styles.reviewsMark} style={{display: "flex", flexDirection: "row", alignItems: "center", alignContent: "center", alignSelf: "center"}}>
                        <Form.Item>
                            {getFieldDecorator('reviewMark', { initialValue: 5 })(
                                <Rate tooltips={desc} onChange={this.handleChange} value={value} className={"reviewMark"}/>
                            )}
                        </Form.Item>
                        <span>{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}</span>
                        </div>
                        <span className={styles.reviewsFooterSeparator}/>
                        <div className={styles.reviewsFooter}>
                            <span/>
                            <Button className={styles.reviewsFooterButtonCancel} key="submit" type="primary" onClick={this.props.onCancel}>Отмена</Button>
                            <Button className={styles.reviewsFooterButtonSubmit} key="submit" type="primary" onClick={() => {this.handleSubmit(createReview)}}>Добавить отзыв</Button>
                        </div>
                    </Form>
                )}
            </Mutation>
        );
    }
}

// const WrappedNewsAdd = Form.create({ name: 'normal_login' })(NewsAdd);
// export default WrappedNewsAdd;
export default Form.create()(ReviewsAdd) as unknown as React.ComponentClass<FormCreateKostyl<ReviewsAdd>>;