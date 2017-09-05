import * as React from "react"
import {Header} from "pages/Header"
import {AppViewer} from "pages/AppViewer"
import {Footer} from "pages/Footer"
import {Landing} from "pages/Landing"

export class App extends React.Component<{}, {}>
{
    render()
    {
        let loggedIn = <div className = "App">
                <Header/>
                <div>
                    <AppViewer/>
                </div>
                <Footer/>
            </div>
        let notLoggedIn = <Landing/>
        return(  
            notLoggedIn
        );
    }
}