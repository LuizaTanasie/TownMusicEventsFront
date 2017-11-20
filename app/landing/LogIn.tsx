import * as React from "react"
import { LoginObject } from 'objects/LogInObject';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { LoginService } from 'services/LoginService';

export class LogIn extends React.Component<{}, { errorLogingIn: boolean, successfulLogIn: boolean, email: string, password: string }>
{
    constructor() {
        super();
        this.state = { email: '', errorLogingIn: false, password: '', successfulLogIn: false };
        this.handleLogInEmail = this.handleLogInEmail.bind(this);
        this.handleLogInPassword = this.handleLogInPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRoute = this.changeRoute.bind(this);
        this.loginFailed = this.loginFailed.bind(this);
    }
    handleSubmit(event: any) {
        event.preventDefault();
        var loginObject = new LoginObject();
        loginObject.password = this.state.password;
        loginObject.email = this.state.email;
        var loginResult = LoginService.tryToLogIn(this, loginObject);
    }

    handleLogInEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }
    handleLogInPassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value });
    }

    loginFailed() {
        this.setState({ errorLogingIn: true });
    }

    changeRoute(){
        this.setState({ successfulLogIn: true });
    }

    render() {
        let errorMessage = null;
        if (this.state.errorLogingIn == true) {
            errorMessage = <div className="alert error-alert">Username sau parola gresite!</div>
        }
        if (this.state.successfulLogIn == true) {
            window.location.replace("/");
        }
        return (
            <div>
                <div className="bg">
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="login-container col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <form>
                        <div className="spacing">
                            E-mail:
                                <input type="text" name="username" className="form-control input" placeholder='Introdu e-mailul' onChange={this.handleLogInEmail} />
                        </div>
                        <div className="spacing">
                            Parolă:
                                <input type="password" name="password" className="form-control input" placeholder='Introdu parola' onChange={this.handleLogInPassword} />
                        </div>
                        <br />
                        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <button className="button-purple" onClick={this.handleSubmit}>Autentificare</button>
                        </div>
                        <div className=" col col-xs-12 col-sm-12 col-md-3 col-lg-3"><br /></div>
                        <div className="small-text col col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            Nu ai deja cont?
                            <div className="link"><Link to='/signup' >Înregistrează-te</Link></div>
                        </div>
                        <br /><br /><br />
                        {errorMessage}
                    </form>
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        );
    }
}