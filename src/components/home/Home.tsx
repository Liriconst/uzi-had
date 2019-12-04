import * as React from "react";
import {Router, Switch, Route, Link} from "react-router-dom";

class Home extends React.Component<{}, {
    test?: boolean
}> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            test: false
        }
    }

    public render(): React.ReactNode {
        return (
            <div><Link to="/news">Новости</Link></div>
        );
    }
}

export default Home;