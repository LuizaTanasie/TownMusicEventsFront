import * as React from "react"
import { LandingHeader } from "landing/LandingHeader"
import { HeaderFan } from "components/HeaderFan"
import { HeaderArtist } from "components/HeaderArtist"
import { TokenService } from 'services/TokenService';

export class Header extends React.Component<{}, { isLoggedIn: any, token: any }>
{
    constructor() {
        super();
        this.state = { token: { user_id: -1, name: '', role: -1 }, isLoggedIn: undefined }
    }

    componentDidMount() {
        TokenService.isValid(this);
        TokenService.getTokenData(this);
        console.log(this.state.token.role);
    }

    render() {
        let header = null;
        if (this.state.isLoggedIn == false) {
            header = <LandingHeader />
        }
        else if (this.state.token.role == 0) {
            header = <HeaderFan />
        }
        else if (this.state.token.role == 1) {
            header = <HeaderArtist />
        }
        return (
            <div>
                {header}
            </div>
        );
    }
}