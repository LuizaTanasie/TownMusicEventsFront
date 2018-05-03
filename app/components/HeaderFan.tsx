import * as React from "react"
import { Link } from 'react-router-dom';
import { LogOutService } from 'services/LogOutService';


export class HeaderFan extends React.Component<{}, {}>
{
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut() {}


    render() {
        return (
            <nav className="header">
                <div className="container-fluid">
                    <div className="logo navbar-header">
                        <Link className="navbar-brand" to='/'>MusicJourney</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to='/' className=" header-button">Dashboard</Link></li>
                        <li><Link to='/' className=" header-button">Descopera artisti</Link></li>
                        <li><Link to='/' className=" header-button">Artisti preferati</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/profile' className="header-link"><div className="glyphicon glyphicon-user"></div>Profil</Link></li>
                        <li><a onClick={LogOutService.LogOut} className="header-link">
                            <div className="glyphicon glyphicon-log-out"></div> Iesire
                            </a></li>

                    </ul>
                </div>
            </nav >
        );
    }
}