import * as React from "react";
import {Link} from "react-router-dom";

class News extends React.Component<{}, {
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
            <div><Link to="/home">Главная</Link></div>
        );
    }
}

export default News;