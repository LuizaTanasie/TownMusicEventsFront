import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import { GenreService } from 'services/GenreService';
import { ArtistProfileObject } from 'objects/ArtistProfileObject';
import { Link } from 'react-router-dom';
import Select from "react-select"
import { UserService } from 'services/UserService';
import "style/artist-profile.less"


export class ArtistPrivateProfile extends React.Component<{ artistId: number }, {
    artist: any, genres: any, errorMsg: string, success: boolean,
    biography: string, name: string, fb: string, twitter: string, yt: string, insta: string, website: string,
    pic1: string, spotify: string, sc: string, oldPass: string, newPass: string, genresArtist: any
}>
{
    constructor() {
        super();
        this.state = {
            artist: '', genres: [], biography: '', genresArtist: [], errorMsg: '', success: false,
            name: '', fb: '', twitter: '', yt: '', insta: '', website: '', pic1: '', spotify: '', sc: '',
            oldPass: '', newPass: ''
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeBio = this.handleChangeBio.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
        this.handleFb = this.handleFb.bind(this);
        this.handleYt = this.handleYt.bind(this);
        this.handleTwitter = this.handleTwitter.bind(this);
        this.handlePic1 = this.handlePic1.bind(this);
        this.handleSpotify = this.handleSpotify.bind(this);
        this.handleSoundCloud = this.handleSoundCloud.bind(this);
        this.handleChangeGenres = this.handleChangeGenres.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.changeSelectedGenres = this.changeSelectedGenres.bind(this);
    }

    componentDidMount() {
        ArtistService.getArtist(this, this.props.artistId);
        GenreService.getGenresForArtist(this, this.props.artistId);
        GenreService.getAllGenres(this);
    }

    handleChangeBio(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ biography: event.currentTarget.value });
    }
    handleName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }
    handleWebsite(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ website: event.currentTarget.value });
    }

    handleFb(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ fb: event.currentTarget.value });
    }

    handleYt(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ yt: event.currentTarget.value });
    }

    handleInsta(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ insta: event.currentTarget.value });
    }
    handleTwitter(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ twitter: event.currentTarget.value });
    }

    handleSpotify(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ spotify: event.currentTarget.value });
    }
    handleSoundCloud(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ sc: event.currentTarget.value });
    }
    handlePic1(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ pic1: event.currentTarget.value });
    }

    handleChangeGenres(event: any) {
        event.preventDefault();
        GenreService.addGenres(this, this.props.artistId, this.state.genresArtist);
    }

    changeSelectedGenres(val: any) {
        console.log("Selected: " + JSON.stringify(val));
        this.setState({ genresArtist: val });
    }

    private handleOldPass = (ev: React.FormEvent<HTMLInputElement>) => {
        this.setState({ oldPass: ev.currentTarget.value });
    }
    private handleNewPass = (ev: React.FormEvent<HTMLInputElement>) => {
        this.setState({ newPass: ev.currentTarget.value });
    }


    handleSave(event: any) {
        event.preventDefault();
        var artistProfileObject = new ArtistProfileObject();
        artistProfileObject.id = this.props.artistId;
        artistProfileObject.name = this.state.name;
        artistProfileObject.biography = this.state.biography;
        artistProfileObject.insta = this.state.insta;
        artistProfileObject.fb = this.state.fb;
        artistProfileObject.yt = this.state.yt;
        artistProfileObject.website = this.state.website;
        artistProfileObject.twitter = this.state.twitter;
        artistProfileObject.pic1 = this.state.pic1;
        artistProfileObject.spotify = this.state.spotify;
        artistProfileObject.sc = this.state.sc;

        var result = ArtistService.updateArtist(this, artistProfileObject);
    }

    handleChangePass(event: any) {
        event.preventDefault();
        UserService.changePassword(this, this.props.artistId, this.state.oldPass, this.state.newPass);
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
                            <img className="img-responsive" src={this.state.artist.PictureUrl} />
                        </div>
                        <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4 ">
                            <div className="input-entry-text-big">Nume: </div>
                            <input type="text" name="artist-name" className="input-private-profile-big" placeholder={this.state.artist.Name} onChange={this.handleName} />
                            <div className="input-entry-text">Website: </div>
                            <input type="text" name="artist-website" className="input-private-profile" placeholder={this.state.artist.Website} onChange={this.handleWebsite} />
                            <div className="input-entry-text">Facebook: </div>
                            <input type="text" name="artist-facebook" className="input-private-profile" placeholder={this.state.artist.Facebook} onChange={this.handleFb} />

                            <div className="input-entry-text">Twitter: </div>
                            <input type="text" name="artist-twitter" className="input-private-profile" placeholder={this.state.artist.Twitter} onChange={this.handleTwitter} />

                            <div className="input-entry-text">Instagram: </div>
                            <input type="text" name="artist-instagram" className="input-private-profile" placeholder={this.state.artist.Instagram} onChange={this.handleInsta} />

                            <div className="input-entry-text">Youtube: </div>
                            <input type="text" name="artist-youtube" className="input-private-profile" placeholder={this.state.artist.YouTube} onChange={this.handleYt} />
                            <div className="input-entry-text">Spotify: </div>
                            <input type="text" name="artist-spotify" className="input-private-profile" placeholder={this.state.artist.Spotify} onChange={this.handleSpotify} />
                            <div className="input-entry-text">SoundCloud: </div>
                            <input type="text" name="artist-soundcloud" className="input-private-profile" placeholder={this.state.artist.SoundCloud} onChange={this.handleSoundCloud} />

                            <button className="link-button" data-toggle="modal" data-target="#myModalPassword">Schimbă parola</button><br />
                            <button className="link-button" data-toggle="modal" data-target="#myModalGenres">Schimbă genurile muzicale</button>
                            {(this.state.errorMsg != '') ? (<div className="alert error-alert">{this.state.errorMsg}</div>) : (<br />)}
                            {(this.state.success) ? (<div className="alert success-alert">Modificarile au fost salvate cu success.</div>) : (<br />)}
                        </div>
                        <div className="col col-sm-10 col-md-10 col-lg-10 col-md-offset-1 spacing-top">
                            <div className="input-entry-text">Url poza: </div>
                            <input type="text" name="artist-picture1" className="input-private-profile-long" placeholder={this.state.artist.PictureUrl} onChange={this.handlePic1} /><br />
                        </div>
                        <div className="col col-sm-10 col-md-10 col-lg-10 col-md-offset-1 biography-container-private">
                            <div className="input-entry-text-black">Biografie: </div>
                            <textarea placeholder={this.state.artist.Biography} name="descriere" className="form-control textarea " onChange={this.handleChangeBio} rows={9} />
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

                <div id="myModalGenres" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Schimbati genurile muzicale:</h4>
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
                                            value={this.state.genresArtist}
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

            </div>
        );
    }
}