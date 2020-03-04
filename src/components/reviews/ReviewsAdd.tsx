import * as React from "react";
import styles from "./Reviews.module.scss";
import {Input, Form, Icon, Button, Checkbox, notification, InputNumber} from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "./Reviews.scss";
import {FormCreateKostyl} from "../../utils";
const {TextArea} = Input;

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
    loading?:boolean
}> {
    public constructor(props: ReviewsAddProps) {
        super(props);
        this.state = {
            mode: 'all',
            visible: false,
            loading: false
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
                createReview({ variables: { firstName: values.firstName, secondName: values.secondName, reviewText: values.reviewText, reviewMark: values.reviewMark,}});
                this.props.onCancel();
                this.openNotification();
                this.props.form.resetFields();
            }
        });
    };

    public render(): React.ReactNode {
        const { getFieldDecorator } = this.props.form;

        return (
            <Mutation mutation={ADD_REVIEWS}>
                {(createReview: any, {}) => (
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className={styles.addNewsHeaderTitle}>Введите ваше имя:</div>
                        <Form.Item>
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <Input placeholder="Имя..."/>
                            )}
                        </Form.Item>
                        <div className={styles.addNewsHeaderText}>Введите вашу фамилию:</div>
                        <Form.Item>
                            {getFieldDecorator('secondName', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <Input placeholder="Фамилия..."/>
                            )}
                        </Form.Item>
                        <div className={styles.addNewsHeaderText}>Введите ваш отзыв:</div>
                        <Form.Item>
                            {getFieldDecorator('reviewText', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <TextArea placeholder="Текст отзыва..." autoSize={{minRows: 3}}/>
                            )}
                        </Form.Item>
                        <div className={styles.addNewsHeaderText}>Введите оценку:</div>
                        <Form.Item>
                            {getFieldDecorator('reviewMark', {
                                rules: [{ required: true, message: 'Пожалуйста, заполните поле!' }],
                            })(
                                <InputNumber placeholder="Оценка..."/>
                            )}
                        </Form.Item>
                        <span className={styles.addNewsFooterSeparator}/>
                        <div className={styles.addNewsFooter}>
                            <span/>
                            <Button className={styles.addNewsFooterButtonCancel} key="submit" type="primary" onClick={this.props.onCancel}>Отмена</Button>
                            <Button className={styles.addNewsFooterButtonSubmit} key="submit" type="primary" onClick={() => {this.handleSubmit(createReview)}}>Добавить новость</Button>
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