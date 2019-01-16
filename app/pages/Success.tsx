import * as React from "react"
import StackGrid from 'react-stack-grid';
import { VisitService } from 'services/VisitService';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { RatingService } from 'services/RatingService';

export class Success extends React.Component<{},{}>
{

    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container">
                <div className="container-regular">
                    <div className="col col-xs-0 col-sm-6 col-md-6 col-lg-6 col-md-offset-2">
                        <h1>Înregistrare cu succes.</h1>
                        <div className="link"><Link to='/' >Continuați către Dashboard</Link></div>

                    </div>
                </div>
            </div>
        );
    }
}