import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./About.module.scss";

class About extends React.Component<{}, {
    test?: boolean
}> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            test: false
        }
    }

// <div><Link to="/news">Новости</Link></div>
    public render(): React.ReactNode {
        return (
            <div></div>
        );
    };
};

export default About;