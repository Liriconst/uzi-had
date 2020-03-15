import * as React from "react";
import * as _ from 'lodash';
import "./Reviews.scss";
import styles from "./Reviews.module.scss";
import {Input, Form, Icon, Button, Rate, notification, InputNumber} from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {FormCreateKostyl} from "../../utils";
import {MobileMax479, MobileMin480} from "../../responsiveModule";

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

function editFIO(str: string) {
    return _.startCase(_.toLower(str));
}

const swearwordFilter = /\w{0,5}[хxХХсС]([хxХХсС\s\!@#\$%\^&*+-\|\/]{0,6})[yYуУ]([yYуУ\s\!@#\$%\^&*+-\|\/]{0,6})[ёЁiIлЛeЕеЕюЮиИйЙяЯ]\w{0,7}|\w{0,6}[пПpР]([пПpР\s\!@#\$%\^&*+-\|\/]{0,6})[iIиИеЕ]([iIиИеЕ\s\!@#\$%\^&*+-\|\/]{0,6})[3зcCсС]([3зcCсС\s\!@#\$%\^&*+-\|\/]{0,6})[дДdD]\w{0,10}|[cCсСsS][уУyУ]([уУyУ\!@#\$%\^&*+-\|\/]{0,6})[4чЧkKкК]\w{1,3}|\w{0,4}[bBбБ]([bBбБ\s\!@#\$%\^&*+-\|\/]{0,6})[lLлЛ]([lLлЛ\s\!@#\$%\^&*+-\|\/]{0,6})[yя]\w{0,10}|\w{0,8}[еЕёЁ][bBбБ][лЛсСкКеЕ@eEыЫиИаАaA][нНаАиИ@йЙвВлЛ]\w{0,8}|\w{0,4}[еЕeE]([еЕeE\s\!@#\$%\^&*+-\|\/]{0,6})[бБbB]([бБbB\s\!@#\$%\^&*+-\|\/]{0,6})[uUyYуУ]([uUyYуУ\s\!@#\$%\^&*+-\|\/]{0,6})[нН4чЧ]\w{0,4}|\w{0,4}[еЕeEёЁ]([еЕeEёЁ\s\!@#\$%\^&*+-\|\/]{0,6})[бБbB]([бБbB\s\!@#\$%\^&*+-\|\/]{0,6})[нНnN]([нНnN\s\!@#\$%\^&*+-\|\/]{0,6})[уУyY]\w{0,4}|\w{0,4}[еЕeE]([еEeЕ\s\!@#\$%\^&*+-\|\/]{0,6})[бБbB]([бБbB\s\!@#\$%\^&*+-\|\/]{0,6})[оОoOаАaA@]([оОoOаАaA@\s\!@#\$%\^&*+-\|\/]{0,6})[тТnNнНtT]\w{0,4}|\w{0,10}[ёЁ]([ёЁ\!@#\$%\^&*+-\|\/]{0,6})[бБ]\w{0,6}|\w{0,4}[pРпП]([pРпП\s\!@#\$%\^&*+-\|\/]{0,6})[иИeЕеEiI]([иИeЕеEiI\s\!@#\$%\^&*+-\|\/]{0,6})[дДdD]([дДdD\s\!@#\$%\^&*+-\|\/]{0,6})[oOоОаAaА@еЕeEиИiI]([oOоОаAaА@еЕeEиИiI\s\!@#\$%\^&*+-\|\/]{0,6})[рr]\w{0,12}|\w{0,6}[cСсCsS][уУuUyY][kKкК][иИiI][aАаA]/;

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

    validatorFIO = (rule: any, str: string, callback: any) => {
        if (str === "") callback('Пожалуйста, заполните поле!');
        else if (!/^[а-яА-ЯёЁ ]+$/.test(str)) callback('Разрешены только буквы русского алфавита. Пожалуйста, проверьте введёные данные.');
        else if (swearwordFilter.test(str)) callback('Присутствуют нецензурные выражения. Пожалуйста, проверьте введёные данные.');
        callback()
    };

    validatorReview = (rule: any, str: string, callback: any) => {
        if (str === "") callback('Пожалуйста, заполните поле!');
        else if (!/^[?!.,:;"«»а-яА-ЯёЁ\-0-9 ]+$/.test(str)) callback('Разрешены только буквы русского алфавита, цифры и следующие спецсимволы: ?!.,:;"«»- . Пожалуйста, проверьте введёные данные.');
        else if (swearwordFilter.test(str)) callback('Присутствуют нецензурные выражения. Пожалуйста, проверьте введёные данные.');
        callback()
    };

    validatorMark = (rule: any, value: number, callback: any) => {
        if (value == 0) callback('Пожалуйста, выберите оценку!');
        callback()
    };

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
                createReview({ variables: { firstName: editFIO(values.firstName), secondName: editFIO(values.secondName), reviewText: values.reviewText, reviewMark: values.reviewMark}});
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
                                rules: [{
                                    required: true,
                                    validator: this.validatorFIO
                                }],
                            })(<Input placeholder="Имя..."/>)}
                        </Form.Item>
                        <div className={styles.reviewsHeaderText}>Введите вашу фамилию:</div>
                        <Form.Item>
                            {getFieldDecorator('secondName', {
                                rules: [{
                                    required: true,
                                    validator: this.validatorFIO
                                }],
                            })(<Input placeholder="Фамилия..."/>)}
                        </Form.Item>
                        <div className={styles.reviewsHeaderText}>Введите ваш отзыв:</div>
                        <Form.Item>
                            {getFieldDecorator('reviewText', {
                                rules: [{
                                    required: true,
                                    validator: this.validatorReview
                                }],
                            })(<TextArea placeholder="Текст отзыва..." autoSize={{minRows: 3}}/>)}
                        </Form.Item>
                        <div className={styles.reviewsHeaderText}>Ваша оценка:</div>
                        <div className={styles.reviewsMark}>
                        <Form.Item>
                            {getFieldDecorator('reviewMark', { initialValue: 5,
                                rules: [{
                                    required: true,
                                    validator: this.validatorMark
                                }],
                            })(<Rate tooltips={desc} onChange={this.handleChange} value={value} className={"reviewMarkInModal"}/>)}
                        </Form.Item>
                        <span>{value ? <span className="reviewMarkTextInModal">{desc[value - 1]}</span> : ''}</span>
                        </div>
                        <span className={styles.reviewsFooterSeparator}/>
                        <div className={styles.reviewsFooter}>
                            <MobileMin480><span/></MobileMin480>
                            <Button className={styles.reviewsFooterButtonCancel} key="submit" type="primary" onClick={this.props.onCancel}>Отмена</Button>
                            <MobileMax479><span/></MobileMax479>
                            <MobileMin480><Button className={styles.reviewsFooterButtonSubmit} key="submit" type="primary" onClick={() => {this.handleSubmit(createReview)}}>Добавить отзыв</Button></MobileMin480>
                            <MobileMax479><Button className={styles.reviewsFooterButtonSubmit} key="submit" type="primary" onClick={() => {this.handleSubmit(createReview)}}>Добавить</Button></MobileMax479>
                        </div>
                    </Form>
                )}
            </Mutation>
        );
    }
}

export default Form.create()(ReviewsAdd) as unknown as React.ComponentClass<FormCreateKostyl<ReviewsAdd>>;