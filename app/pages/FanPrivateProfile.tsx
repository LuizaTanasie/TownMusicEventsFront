import * as React from "react"
import { GenreService } from 'services/GenreService';

export class FanPrivateProfile extends React.Component<{ fanId: number }, {
    fan: any, genres: any,
    biography: string, name: string, pic1: string, oldPass: string, newPass: string
}>
{
    constructor() {
        super();
        this.state = {
            fan: '', genres: [], biography: '',
            name: '', pic1: '', oldPass: '', newPass: ''
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeBio = this.handleChangeBio.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePic1 = this.handlePic1.bind(this);
    }

    componentDidMount() {
        // ArtistService.getArtist(this, this.props.artistId);
        GenreService.getGenresForFan(this, this.props.fanId);
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
        // ProfileService.changePassword(this);
    }



    render() {
        let genres = this.state.genres.map(function (object: any, i: any) {
            return <span>{object.value} | </span>
        })
        let imageList = '';
        return (
            <div>
                <div className="page-container">
                    <div className="container-regular">
                        <div className="col col-xs-0 col-sm-6 col-md-6 col-lg-6 col-md-offset-1">
                            <img className="img-responsive" src={this.state.fan.PictureUrl} />
                        </div>
                        <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4 ">
                            <div className="input-entry-text-big">Nume: </div>
                            <input type="text" name="artist-name" className="input-private-profile-big" placeholder={this.state.fan.Name} onChange={this.handleName} />


                            <button className="link-button" data-toggle="modal" data-target="#myModalPassword">Schimbă parola</button><br />
                            <button className="link-button">Schimbă genurile muzicale</button>
                        </div>
                        <div className="col col-sm-10 col-md-10 col-lg-10 col-md-offset-1 spacing-top">
                            <div className="input-entry-text">Url poza: </div>
                            <input type="text" name="artist-picture1" className="input-private-profile-long" placeholder={this.state.fan.PictureUrl} onChange={this.handlePic1} /><br />
                        </div>
                        <div className="col col-sm-10 col-md-10 col-lg-10 col-md-offset-1 biography-container-private">
                            <div className="input-entry-text-black">Biografie: </div>
                            <textarea placeholder={this.state.fan.About} name="descriere" className="form-control textarea " onChange={this.handleChangeBio} rows={9} />
                        </div>
                        <div className="col col-sm-1 col-md-1 col-lg-1"></div>
                        <div className="row">
                            <div className="col col-sm-2 col-md-2 col-lg-2 col-md-offset-1">
                                <button className="button-purple" onClick={this.handleSave}>Salvează modificări</button>
                            </div>
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
            </div >
        );
    }
}