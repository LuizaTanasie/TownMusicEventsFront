import * as React from "react"
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import { LandingMain } from "landing/LandingMain"
import { SignUp } from "landing/SignUp"
import { SignUpFan } from "landing/SignUpFan"
import { SignUpArtist } from "landing/SignUpArtist"
import { SignUpVenue } from "landing/SignUpVenue"
import { LogIn } from "landing/LogIn"
import { Dashboard } from "pages/Dashboard"
import { PrivateProfileFan } from "pages/PrivateProfileFan"
import { ArtistPrivateProfile } from "pages/ArtistPrivateProfile"
import { AccessDenied } from "pages/AccessDenied"
import { PrivateProfileVenue } from "pages/PrivateProfileVenue"
import { Loading } from "pages/Loading"
import { withRouter } from 'react-router'
import { TokenService } from 'services/TokenService';
import { ArtistPublicProfile } from 'pages/ArtistPublicProfile';

export class AppViewer extends React.Component<{}, { isLoggedIn: any, token: any }>
{
    constructor() {
        super();
        this.state = { isLoggedIn: undefined, token: { user_id: -1, name: '', role: -1 } }
    }


    componentDidMount() {
        TokenService.isValid(this);
        TokenService.getTokenData(this);
    }

    render() {
        let home = null;
        if (this.state.isLoggedIn == false) {
            home = <Route exact path="/" component={LandingMain} />
        }
        else if (this.state.isLoggedIn == true) {
            home = <Route exact path="/" component={Dashboard} />
        }
        return (

            <div>
                <Switch>
                    {home}
                    <Route path='/landing' component={LandingMain} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signup-fan' component={SignUpFan} />
                    <Route path='/signup-artist' component={SignUpArtist} />
                    <Route path='/signup-venue' component={SignUpVenue} />
                    <Route path='/login' component={LogIn} />
                    <Route path='/artist/:id' render={(props) => <ArtistPublicProfile artistId={props.match.params.id} />} />
                    <Route path='/profile' component={(props) =>
                        (this.state.token.role == 0) ?
                            (<PrivateProfileFan id={this.state.token.user_id} />)
                            : (this.state.token.role == 1) ?
                                (<ArtistPrivateProfile artistId={this.state.token.user_id} />)
                                : (this.state.token.role == 2) ?
                                    (<PrivateProfileVenue id={this.state.token.user_id} />)
                                    : (<AccessDenied/>)
                    } />
                </Switch>
            </div>
        );
    }
}
export default withRouter(Dashboard)
