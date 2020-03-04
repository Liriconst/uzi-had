import * as React from "react";
import {Link} from "react-router-dom";
import autobind from "autobind-decorator";
import styles from "./Reviews.module.scss";
import {Select, Modal, Button, Input} from 'antd';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table } from 'antd';
import { ApolloError } from "apollo-boost";
import moment from "moment";
import WrappedReviewsAdd from "./ReviewsAdd";

const GET_REVIEWS = gql`
    query {
        allReviews(orderBy: REVIEW_DATE_DESC) {
            nodes {
                id
                firstName
                secondName
                reviewText
                reviewMark
                reviewDate
            }
        }
    }
`;

class ReviewsAll extends React.Component<{}, {
    mode?: string,
    visible?: boolean
}> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            mode: 'all',
            visible: false
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
            <Query query={GET_REVIEWS}>
                {({loading, error, data}: {loading: boolean, error?: ApolloError, data: any}) => {
                    if (loading) return <span>"Loading...";</span>
                    if (error) return <span>`Error! ${error.message}`</span>;
                    console.log(data);
                    return (
                        <div className={styles.newsAll}>
                            {data.allReviews.nodes.map((reviewsQuery: any) => (
                                <Button type="primary" key={reviewsQuery.id} className={"newsList"}>
                                    <span>Новость&nbsp;</span>
                                    <span>"{reviewsQuery.firstName}"&nbsp;</span>
                                    <span>"{reviewsQuery.secondName}"&nbsp;</span>
                                    <span>"{reviewsQuery.reviewText}"&nbsp;</span>
                                    <span>"{reviewsQuery.reviewMark}"&nbsp;</span>
                                    <span>от&nbsp;</span>
                                    <span>{moment(reviewsQuery.reviewDate).format("DD.MM.YYYY hh:mm:ss")}</span>
                                </Button>
                            ))}
                            <Modal
                                title="Ваш отзыв"
                                visible={this.state.visible}
                                onCancel={this.handleCancel}
                                wrapClassName="newsWrap"
                            >
                                <WrappedReviewsAdd onCancel={this.handleCancel}/>
                            </Modal>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default ReviewsAll;