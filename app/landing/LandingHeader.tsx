import * as React from "react"
import {Link} from 'react-router-dom';

export class LandingHeader extends React.Component<{}, {}>
{
    render() {
        return (
            <div className="header-landing">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 logo">
               <Link to='/'> MusicJourney</Link>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
               
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="links">
                            <Link to='/login' className="link-login">Autentificare</Link>
                            <Link to='/signup' className="button-signup-small">Înregistrare</Link>
                        </div>
                    </div>
                
            </div>
        );
    }
}