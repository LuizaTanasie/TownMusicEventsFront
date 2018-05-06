import * as React from "react"
import { Link } from "react-router-dom";
import Select from "react-select"
import 'react-select/dist/react-select.css';
import { SignUpUserObject } from 'objects/SignUpUserObject';
import { SignUpService } from 'services/SignUpService';
import { GenreService } from 'services/GenreService';

export class SignUpArtist extends React.Component<{}, {
    selectedGenres: any, genres: Array<any>, email: string,
    name: string, password: string, passwordAgain: string, error: string;
}>
{
    private pw: string;
    private checkPw: string;

    constructor() {
        super();
        this.changeSelectedGenres = this.changeSelectedGenres.bind(this);
        this.state = { selectedGenres: [], genres: [], email: '', name: "", password: '', passwordAgain: '', error: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePasswordAgain = this.handlePasswordAgain.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        if (this.pw == this.checkPw) {
            var obj = new SignUpUserObject();
            obj.email = this.state.email;
            obj.name = this.state.name;
            obj.password = this.state.password;
            SignUpService.signUpArtist(this, obj, this.state.selectedGenres);
        }
    }

    handleEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }
    handlePassword(event: React.FormEvent<HTMLInputElement>) {
        this.pw = event.currentTarget.value;
        this.setState({ password: event.currentTarget.value });
    }
    handleName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }
    handlePasswordAgain(event: React.FormEvent<HTMLInputElement>) {
        this.checkPw = event.currentTarget.value;
        if (this.pw != this.checkPw) {
            this.setState({ error: "Parolele introduse nu coincid" });
        }
        else {
            this.setState({ error: "" });
        }
    }
    refresh() {
        window.location.replace("/");
    }

    componentDidMount() {
        GenreService.getAllGenres(this);
    }

    changeSelectedGenres(val: any) {
        console.log("Selected: " + JSON.stringify(val));
        this.setState({ selectedGenres: val });
    }

    render() {

        return (
            <div>
                <div className="bg">
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="signup-container col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="spacing">Înregistrare ca artist muzical:<br /><br /></div>
                    <form>
                        <div className="spacing">
                            E-mail:
                                <input type="text" name="email" className="form-control input" onChange={this.handleEmail} />
                        </div>
                        <div className="spacing">
                            Nume de scenă:
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
                        <div className="spacing">
                            Genuri muzicale:
                            <Select
                                name="form-field-genre"
                                options={this.state.genres}
                                multi={true}
                                joinValues
                                matchPos="start"
                                ignoreCase={true}
                                openOnFocus={true}
                                placeholder="Selecteaza genuri"
                                noResultsText="Nu exista rezultate"
                                value={this.state.selectedGenres}
                                onChange={this.changeSelectedGenres}
                            />
                        </div>
                        <br />
                        <button className="button-purple spacing" onClick={this.handleSubmit}>Înregistrare</button>
                        {(this.state.error != '') ? (<div className="alert error-alert">Au aparut urmatoarele erori:<br />{this.state.error}</div>) : (<br />)}
                        <br /><br />
                    </form>
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        );
    }
}