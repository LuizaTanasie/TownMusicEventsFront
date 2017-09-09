import * as React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import { LandingMain } from "landing/LandingMain"
import { SignUp } from "landing/SignUp"
import { SignUpFan } from "landing/SignUpFan"
import { SignUpArtist } from "landing/SignUpArtist"
import { LogIn } from "landing/LogIn"
import { withRouter } from 'react-router'

export class LandingContainer extends React.Component<{}, {}>
{

    render() {
        return (
            <div>
                <Route exact path="/" component={LandingMain} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signup-fan' component={SignUpFan} />
                <Route path='/signup-artist' component={SignUpArtist} />
                <Route path='/login' component={LogIn} />
            </div>

        );
    }
}


export default withRouter(LandingMain)
