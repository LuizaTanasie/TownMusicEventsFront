import * as React from "react"
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import { LandingMain } from "landing/LandingMain"
import { SignUp } from "landing/SignUp"
import { SignUpFan } from "landing/SignUpFan"
import { SignUpArtist } from "landing/SignUpArtist"
import { LogIn } from "landing/LogIn"
import { Dashboard } from "pages/Dashboard"
import { Statistics } from "pages/Statistics"
import { FanPrivateProfile } from "pages/FanPrivateProfile"
import { ArtistPrivateProfile } from "pages/ArtistPrivateProfile"
import { AccessDenied } from "pages/AccessDenied"
import { Loading } from "pages/Loading"
import { withRouter } from 'react-router'
import { TokenService } from 'services/TokenService';
import { ArtistPublicProfile } from 'pages/ArtistPublicProfile';
import { ArtistPublicProfileNoRating } from 'pages/ArtistPublicProfileNoRating';

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
                    <Route path='/statistics' component={(props) =>
                        (this.state.token.role == 1) ?
                            (<Statistics artistId={this.state.token.user_id} />)
                            : (<AccessDenied />)} />
                    <Route path='/signup-artist' component={SignUpArtist} />
                    <Route path='/login' component={LogIn} />
                    <Route path='/artist/:id' render={(props) =>
                        (this.state.token.role == 0) ?
                            (<ArtistPublicProfile artistId={props.match.params.id} fanId={this.state.token.user_id} />)
                            : (<ArtistPublicProfileNoRating artistId={props.match.params.id} />)
                    } />
                    <Route path='/profile' component={(props) =>
                        (this.state.token.role == 0) ?
                            (<FanPrivateProfile fanId={this.state.token.user_id} />)
                            : (this.state.token.role == 1) ?
                                (<ArtistPrivateProfile artistId={this.state.token.user_id} />)
                                : (<AccessDenied />)
                    } />
                </Switch>
            </div>
        );
    }
}
export default withRouter(Dashboard)
