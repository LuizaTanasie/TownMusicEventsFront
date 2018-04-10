import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import { GenreService } from 'services/GenreService';
import { ArtistProfileObject } from 'objects/ArtistProfileObject';
import { Link } from 'react-router-dom';
import "style/artist-profile.less"
import Slider from 'react-slick';


export class ArtistPrivateProfile extends React.Component<{ artistId: number }, {
    artist: any, genres: any,
    biography: string, name: string, fb: string, twitter: string, yt: string, insta: string, website: string, pic1: string
}>
{
    constructor() {
        super();
        this.state = {
            artist: '', genres: [], biography: '',
            name: '', fb: '', twitter: '', yt: '', insta: '', website: '', pic1: ''
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeBio = this.handleChangeBio.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
        this.handleFb = this.handleFb.bind(this);
        this.handleYt = this.handleYt.bind(this);
        this.handleTwitter = this.handleTwitter.bind(this);
        this.handlePic1 = this.handlePic1.bind(this);
    }

    componentDidMount() {
        ArtistService.getArtist(this, this.props.artistId);
        GenreService.getGenresForArtist(this, this.props.artistId);
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
    handlePic1(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ pic1: event.currentTarget.value });
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

        var loginResult = ArtistService.updateArtist(this, artistProfileObject);
    }



    render() {
        let genres = this.state.genres.map(function (object: any, i: any) {
            return <span>{object.value} | </span>
        })
        let imageList = '';
        return (
            <div className="page-container">
                <div className="container-regular">
                    <div className="col col-xs-0 col-sm-6 col-md-6 col-lg-6 col-md-offset-1">
                        <Slider adaptiveHeight={true}>
                            <img className="img-responsive" src={this.state.artist.Picture1Url} />
                            <img className="img-responsive" src={this.state.artist.Picture2Url} />
                            <img className="img-responsive" src={this.state.artist.Picture3Url} />
                            <img className="img-responsive" src={this.state.artist.Picture4Url} />
                            <img className="img-responsive" src={this.state.artist.Picture5Url} />
                        </Slider>
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
                        <input type="text" name="artist-youtube" className="input-private-profile" placeholder={this.state.artist.Youtube} onChange={this.handleYt} />

                        <button className="link-button">Schimbă parola</button><br />
                        <button className="link-button">Schimbă genurile muzicale</button>
                    </div>
                    <div className="col col-sm-10 col-md-10 col-lg-10 col-md-offset-1 spacing-top">
                        <div className="input-entry-text">Url poza 1: </div>
                        <input type="text" name="artist-picture1" className="input-private-profile-long" placeholder={this.state.artist.Picture1Url} onChange={this.handlePic1} /><br />
                    </div>
                    <div className="col col-sm-10 col-md-10 col-lg-10 col-md-offset-1 biography-container">
                        <div className="input-entry-text-black">Biografie: </div>
                        <textarea value={this.state.artist.Biography} name="descriere" className="form-control textarea " onChange={this.handleChangeBio} rows={9} />
                    </div>
                    <div className="col col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="row">
                        <div className="col col-sm-2 col-md-2 col-lg-2 col-md-offset-1">
                            <button className="button-purple" onClick={this.handleSave}>Salvează modificări</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}