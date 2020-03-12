import * as React from "react";
import * as _ from 'lodash';
// import "./Reviews.scss";
import styles from "./Footer.module.scss";
import {Input, Form, Icon, Button, Rate, notification, InputNumber} from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import {FormCreateKostyl} from "../../utils";
import {MobileMax479, MobileMin480} from "../../responsiveModule";
import ReactInputMask from "react-input-mask";

const {TextArea} = Input;
const desc = ['Отвратительно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично'];

const ADD_BACK_CALL = gql`
  mutation AddBackCalls ($firstName: String!, $phoneNumber: String!, $changeCabinet: Boolean!, $status: Boolean!) {
    createBackCall (
        input: {
            backCall: {
                firstName: $firstName
                phoneNumber: $phoneNumber
                changeCabinet: $changeCabinet
                status: $status
            }
        }
    ) {
        backCall {
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

function changeCabinet(change: boolean) {
    if (window.location.pathname === "/spa")
        change = false;
    else
        change = true;
    return change;
}

const swearwordFilter = /\w{0,5}[хxХХсС]([хxХХсС\s\!@#\$%\^&*+-\|\/]{0,6})[yYуУ]([yYуУ\s\!@#\$%\^&*+-\|\/]{0,6})[ёЁiIлЛeЕеЕюЮиИйЙяЯ]\w{0,7}|\w{0,6}[пПpР]([пПpР\s\!@#\$%\^&*+-\|\/]{0,6})[iIиИеЕ]([iIиИеЕ\s\!@#\$%\^&*+-\|\/]{0,6})[3зcCсС]([3зcCсС\s\!@#\$%\^&*+-\|\/]{0,6})[дДdD]\w{0,10}|[cCсСsS][уУyУ]([уУyУ\!@#\$%\^&*+-\|\/]{0,6})[4чЧkKкК]\w{1,3}|\w{0,4}[bBбБ]([bBбБ\s\!@#\$%\^&*+-\|\/]{0,6})[lLлЛ]([lLлЛ\s\!@#\$%\^&*+-\|\/]{0,6})[yя]\w{0,10}|\w{0,8}[еЕёЁ][bBбБ][лЛсСкКеЕ@eEыЫиИаАaA][нНаАиИ@йЙвВлЛ]\w{0,8}|\w{0,4}[еЕeE]([еЕeE\s\!@#\$%\^&*+-\|\/]{0,6})[бБbB]([бБbB\s\!@#\$%\^&*+-\|\/]{0,6})[uUyYуУ]([uUyYуУ\s\!@#\$%\^&*+-\|\/]{0,6})[нН4чЧ]\w{0,4}|\w{0,4}[еЕeEёЁ]([еЕeEёЁ\s\!@#\$%\^&*+-\|\/]{0,6})[бБbB]([бБbB\s\!@#\$%\^&*+-\|\/]{0,6})[нНnN]([нНnN\s\!@#\$%\^&*+-\|\/]{0,6})[уУyY]\w{0,4}|\w{0,4}[еЕeE]([еEeЕ\s\!@#\$%\^&*+-\|\/]{0,6})[бБbB]([бБbB\s\!@#\$%\^&*+-\|\/]{0,6})[оОoOаАaA@]([оОoOаАaA@\s\!@#\$%\^&*+-\|\/]{0,6})[тТnNнНtT]\w{0,4}|\w{0,10}[ёЁ]([ёЁ\!@#\$%\^&*+-\|\/]{0,6})[бБ]\w{0,6}|\w{0,4}[pРпП]([pРпП\s\!@#\$%\^&*+-\|\/]{0,6})[иИeЕеEiI]([иИeЕеEiI\s\!@#\$%\^&*+-\|\/]{0,6})[дДdD]([дДdD\s\!@#\$%\^&*+-\|\/]{0,6})[oOоОаAaА@еЕeEиИiI]([oOоОаAaА@еЕeEиИiI\s\!@#\$%\^&*+-\|\/]{0,6})[рr]\w{0,12}|\w{0,6}[cСсCsS][уУuUyY][kKкК][иИiI][aАаA]/;

class BackCallAdd extends React.Component<ReviewsAddProps, {
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
        if (str == null)
            callback('Пожалуйста, заполните поле!');
        else if (!/^[а-яА-ЯёЁ ]+$/.test(str))
            callback('Разрешены только буквы русского алфавита. Пожалуйста, проверьте введёные данные.');
        else if (swearwordFilter.test(str)) callback('Присутствуют нецензурные выражения. Пожалуйста, проверьте введёные данные.');
    };

    openNotification = () => {
        notification.open({
            message: 'Ваш запрос отправлен!',
            description: 'Ваш запрос на обратный звонок успешно отправлен, в ближайшее время вам перезвонят. Спасибо!',
            icon: <Icon type="check-circle" style={{ color: '#52c41a' }} />,
            duration: 6,
        });
    };

    handleSubmit = (createBackCall: any) => {
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                createBackCall({ variables: { firstName: editFIO(values.firstName), phoneNumber: values.phoneNumber, changeCabinet: changeCabinet(values.changeCabinet), status: (values.status = false)}});
                this.props.onCancel();
                this.openNotification();
                this.props.form.resetFields();
            }
        });
    };

    public render(): React.ReactNode {
        const { getFieldDecorator } = this.props.form;
        const { value } = this.state;

        return (
            <Mutation mutation={ADD_BACK_CALL}>
                {(createBackCall: any, {}) => (
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{width: "360px !important"}}>
                        <div className={styles.footerHeaderTitle}>Введите ваше имя:</div>
                        <Form.Item>
                            {getFieldDecorator('firstName', {
                                rules: [{
                                    required: true,
                                    validator: this.validatorFIO
                                }],
                            })(<Input placeholder="Имя..."/>)}
                        </Form.Item>
                        <div className={styles.footerHeaderText}>Введите ваш номер телефона:</div>
                        <Form.Item>
                            {getFieldDecorator('phoneNumber', {
                                rules: [{
                                    required: true,
                                    message: "Пожалуйста, заполните поле!"
                                }],
                            })(
                                <ReactInputMask mask="+9(999)999-99-99" placeholder="+7(123)456-78-90" className="ant-input" />
                                )}
                        </Form.Item>
                        <span className={styles.reviewsFooterSeparator}/>
                        <div className={styles.footerFooter}>
                            <MobileMin480><span/></MobileMin480>
                            <Button className={styles.footerFooterButtonCancel} key="submit" type="primary" onClick={this.props.onCancel}>Отмена</Button>
                            <MobileMax479><span/></MobileMax479>
                            <MobileMin480><Button className={styles.footerFooterButtonSubmit} key="submit" type="primary" onClick={() => {this.handleSubmit(createBackCall)}}>Отправить запрос</Button></MobileMin480>
                            <MobileMax479><Button className={styles.footerFooterButtonSubmit} key="submit" type="primary" onClick={() => {this.handleSubmit(createBackCall)}}>Отправить</Button></MobileMax479>
                        </div>
                    </Form>
                )}
            </Mutation>
        );
    }
}

export default Form.create()(BackCallAdd) as unknown as React.ComponentClass<FormCreateKostyl<BackCallAdd>>;