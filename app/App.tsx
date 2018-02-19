import * as React from "react"
import { Header } from "Components/Header"
import { AppViewer } from "pages/AppViewer"
import { Footer } from "Components/Footer"
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import 'style/landing.less';
import 'style/general.less';
import "style/header.less"

export class App extends React.Component<{}, {}>
{
    render() {

        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <AppViewer />
                    </div>
                </Router>
            </div>
        );
    }
}