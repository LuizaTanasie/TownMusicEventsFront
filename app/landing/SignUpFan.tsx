import * as React from "react"
import { Link, Redirect } from "react-router-dom";
import { PreferenceQuiz } from 'landing/PreferenceQuiz';
import { SignUpService } from 'services/SignUpService';
import { SignUpUserObject } from 'objects/SignUpUserObject';

export class SignUpFan extends React.Component<{}, { isNextStep: boolean, email: string, name: string, password: string, passwordAgain: string }>
{
    constructor() {
        super();
        this.state = { isNextStep: false, email: '', name: '', password: '', passwordAgain: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePasswordAgain = this.handlePasswordAgain.bind(this);
    }

    private ratings: Array<any> = [];

    handleSubmit(event: any) {
        event.preventDefault();
        var obj = new SignUpUserObject();
        obj.email = this.state.email;
        obj.name = this.state.name;
        obj.password = this.state.password;
        SignUpService.signUpFan(this, obj);
        this.setState({ isNextStep: true });
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
        if (this.state.isNextStep == true) {
            return (
                <div>
                    <div className="bg" />
                    <div className="col col-xs-0 col-sm-3 col-md-3 col-lg-3"></div>
                    <div className="signup-container col col-xs-12 col-sm-5 col-md-5 col-lg-5">
                        <PreferenceQuiz />
                    </div>
                </div>
            )
        }
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

                        <button className="button-purple spacing" onClick={this.handleSubmit}>Inregistrare</button>
                        <br /><br />
                    </form>
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        );
    }
}