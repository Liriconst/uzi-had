import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import styles from "./Home.module.scss";
import {Desktop, Laptop, Tablet, Mobile} from "../../responsiveModule";

class Book extends React.Component<{}, {
    test?: boolean,
    author?: string,
    name?: string
}> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            test: false,
            author: "",
            name: ""
        }
    }


    public render(): React.ReactNode {
        return (
            <div>
                <span>Author: </span>
                <span>Name: </span>
            </div>
        );
    }
}

export default Book;