import * as React from "react"
import { Link } from "react-router-dom";
import Select from "react-select"
import 'react-select/dist/react-select.css';

export class SignUpArtist extends React.Component<{}, { selectedGenres: any, genres: Array<any>, email: string, name: string, password: string, passwordAgain: string }>
{

    constructor() {
        super();
        this.changeSelectedGenres = this.changeSelectedGenres.bind(this);
        //   this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = { selectedGenres: [], genres: [], email: '', name: "", password: '', passwordAgain: '' };
    }

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

    componentDidMount() {
        var cats: any;
        cats = '';
        return fetch('http://localhost:6840/api/genre')
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => {

                this.setState({ genres: cats })
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
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
                        <Link to="/" className="button-purple spacing" onClick={this.handleSubmit}>Înregistrare</Link>
                        <br /><br />
                    </form>
                </div>
                <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        );
    }
}