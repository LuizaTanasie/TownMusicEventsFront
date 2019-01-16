import * as React from "react"
import { GenreService } from 'services/GenreService';
import { UserService } from 'services/UserService';
import Select from "react-select"

export class FanPrivateProfile extends React.Component<{ fanId: number }, {
    user: any, genres: any, genresFan: any, success:boolean,
    biography: string, name: string, pic1: string, oldPass: string, newPass: string, errorMsg:string
}>
{
    constructor() {
        super();
        this.state = {
            user: '', genres: [], biography: '',genresFan: [], success:false,
            name: '', pic1: '', oldPass: '', newPass: '',errorMsg:''
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeBio = this.handleChangeBio.bind(this);
        this.handleChangeGenres = this.handleChangeGenres.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePic1 = this.handlePic1.bind(this);
        this.changeSelectedGenres = this.changeSelectedGenres.bind(this);
    }

    componentDidMount() {
        UserService.getUser(this, this.props.fanId);
        GenreService.getGenresForFan(this, this.props.fanId);
        GenreService.getAllGenres(this);
    }

    handleChangeBio(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ biography: event.currentTarget.value });
    }
    handleName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }
    handlePic1(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ pic1: event.currentTarget.value });
    }

    handleSave(event: any) {
        event.preventDefault();

    }
    private handleOldPass = (ev: React.FormEvent<HTMLInputElement>) => {
        this.setState({ oldPass: ev.currentTarget.value });
    }
    private handleNewPass = (ev: React.FormEvent<HTMLInputElement>) => {
        this.setState({ newPass: ev.currentTarget.value });
    }

    handleChangePass(event: any) {
        event.preventDefault();
        UserService.changePassword(this,this.props.fanId,this.state.oldPass,this.state.newPass);
    }

    handleChangeGenres(event: any) {
        event.preventDefault();
        GenreService.addGenres(this,this.props.fanId, this.state.genresFan); 
    }

    changeSelectedGenres(val: any) {
        console.log("Selected: " + JSON.stringify(val));
        this.setState({ genresFan: val });
    }

    render() {
        return (
            <div>
                <div className="page-container">
                    <div className="container-regular">
                        <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4 ">
                            <div className="input-entry-text-big">Nume: </div>
                            <span className="input-private-profile-big"> {this.state.user.Name} </span><br/>
                            <div className="input-entry-text">Email: </div>
                            <span className="input-private-profile">{this.state.user.Email} </span><br/><br/>

                            <button className="link-button" data-toggle="modal" data-target="#myModalPassword">Schimbă parola</button><br />
                            <button className="link-button"data-toggle="modal" data-target="#myModalGenres">Schimbă genurile muzicale</button>
                        {(this.state.errorMsg != '') ? (<div className="alert error-alert">{this.state.errorMsg}</div>) : (<br />)}
                        {(this.state.success) ? (<div className="alert success-alert">Modificarile au fost salvate cu success.</div>) : (<br />)}
                        </div>
                        
                    </div>
                </div>
                <div id="myModalPassword" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Schimbati parola:</h4>
                            </div>
                            <div className="modal-body">
                                <div className="spacing">
                                    Parolă veche:
                                <input type="password" name="password" className="form-control input" onChange={this.handleOldPass} />
                                </div>
                                <div className="spacing">
                                    Parolă noua:
                                <input type="password" name="password" className="form-control input" onChange={this.handleNewPass} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.handleChangePass} className="button-purple" data-dismiss="modal">Salvează</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="myModalGenres" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Schimbati genurile muzicale favorite:</h4>
                            </div>
                            <div className="modal-body">
                                <div className="spacing">
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
                                value={this.state.genresFan}
                                onChange={this.changeSelectedGenres}
                            />
                            
                        </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.handleChangeGenres} className="button-purple" data-dismiss="modal">Salvează</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        );
    }
}