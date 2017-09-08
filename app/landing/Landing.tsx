import * as React from "react"
import 'style/landing.less';
import {LandingHeader} from "landing/LandingHeader"
import {LandingContainer} from "landing/LandingContainer"
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class Landing extends React.Component<{}, {}>
{
    render() {
        return (
            <Router>
            <div className="bg">
                <LandingHeader/>
                <div className="wrapper">
                    <LandingContainer/>
                </div>
            </div>
            </Router>
        );
    }
}