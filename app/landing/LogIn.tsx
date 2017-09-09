import * as React from "react"
import { Link } from "react-router-dom";

export class LogIn extends React.Component<{}, {email: string, password: string}>
{

    handleSubmit(event: any) {
        event.preventDefault();
        console.log("inainte de url change");
    }

    handleLogInEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }
    handleLogInPassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value });
    }


    render() {
        return (
            <div>
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
                        <br/>
                        <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <Link to="/" className="button-purple" onClick={this.handleSubmit}>Autentificare</Link>
                        </div>
                        <div className=" col col-xs-12 col-sm-12 col-md-3 col-lg-3"><br/></div>
                        <div className="small-text col col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            Nu ai deja cont?
                            <div className="link"><Link to='/signup' >Înregistrează-te</Link></div>
                        </div>
                        <br/><br/>
                    </form>
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        );
    }
}