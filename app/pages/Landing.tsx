import * as React from "react"
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import 'style/landing.less';


export class Landing extends React.Component<{}, {}>
{
    render() {
        return (
            <div className="bg">
                <div className="header">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 logo">MyMusicTown</div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
                    <Router>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="links">
                            <Link to='/' className="link-login">Autentificare</Link>
                            <Link to='/' className="button-signup-small">Înregistrare</Link>
                        </div>
                        </div>
                    </Router>
                </div>
                <div className="wrapper">
                    <div className="middle-text-landing spacing-bottom">
                        Fii parte a comunității muzicale din Cluj-Napoca
                        <br />

                    </div>
                    <Router>
                        <Link to='/' className="button-signup">Înregistrează-te</Link>
                    </Router>
                </div>
            </div>
        );
    }
}