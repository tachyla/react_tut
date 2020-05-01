import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";
import Input from "./Input";
import Card from "./Card";
import About from "./About";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome Beautiful!",
        };
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <Input />
                <Card />
                <About />
                <Header />
                <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>
            </div>
        );
    }
}

export default Layout;
