import * as React from "react"
import { Link } from "react-router-dom";

export class SignUpFan extends React.Component<{}, { email: string, name: string, password: string, passwordAgain: string }>
{
    handleSubmit(event: any) {
        event.preventDefault();
        console.log("inainte de url change");
    }

    handleEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }
    handlePassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value });
    }
    handleName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }
    handlePasswordAgain(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ passwordAgain: event.currentTarget.value });
    }

    render() {
        return (
            <div>
                <div className="bg">
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="signup-container col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="spacing">Înregistrare ca fan:<br /><br /></div>
                    <form>
                        <div className="spacing">
                            E-mail:
                                <input type="text" name="email" className="form-control input" onChange={this.handleEmail} />
                        </div>
                        <div className="spacing">
                            Nume:
                                <input type="text" name="name" className="form-control input" onChange={this.handleName} />
                        </div>
                        <div className="spacing">
                            Parolă:
                                <input type="password" name="password" className="form-control input" onChange={this.handlePassword} />
                        </div>
                        <div className="spacing">
                            Reintrodu parola:
                                <input type="password" name="passwordagain" className="form-control input" onChange={this.handlePasswordAgain} />
                        </div>
                        <br />
                        <Link to="/" className="button-purple spacing" onClick={this.handleSubmit}>Înregistrare</Link>
                        <br /><br />
                    </form>
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        );
    }
}