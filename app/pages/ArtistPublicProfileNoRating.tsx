import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import { GenreService } from 'services/GenreService';
import { Link } from 'react-router-dom';
import "style/artist-profile.less"


export class ArtistPublicProfileNoRating extends React.Component<{ artistId: number }, { artist: any, genresArtist: any }>
{

    constructor() {
        super();
        this.state = { artist: '', genresArtist: [] };
    }

    componentDidMount() {
        ArtistService.getArtist(this, this.props.artistId);
        GenreService.getGenresForArtist(this, this.props.artistId);
    }

    render() {
        let genres = this.state.genresArtist.map(function (object: any, i: any) {
            return <span>{object.value} | </span>
        })

        return (
            <div className="page-container">
                <div className="container-regular">
                    <div className="col col-xs-0 col-sm-6 col-md-6 col-lg-6 col-md-offset-1">
                        <img className="img-responsive" src={this.state.artist.PictureUrl} />
                    </div>
                    <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="artist-name">{this.state.artist.Name}</div>
                        <div className="">| {genres} </div>
                        <div className="">{this.state.artist.Website} </div>
                        <div className="social-media-container">
                            {(this.state.artist.Facebook != null) ? (
                                <a href={this.state.artist.Facebook} target="_blank">
                                    <img className="img-responsive social-media" src="/images/facebook.png" />
                                </a>) : <span/>}
                            {(this.state.artist.YouTube != null) ? (
                                <a href={this.state.artist.YouTube} target="_blank">
                                    <img className=" img-responsive social-media" src="/images/youtube.png" />
                                </a>) : <span/>}
                            {(this.state.artist.Instagram != null) ? (
                                <a href={this.state.artist.Instagram} target="_blank">
                                    <img className="img-responsive social-media" src="/images/instagram.png" />
                                </a>) : <span/>}
                            {(this.state.artist.Twitter != null) ? (
                                <a href={this.state.artist.Twitter} target="_blank">
                                    <img className="img-responsive social-media" src="/images/twitter.png" />
                                </a>) : <span/>}
                            {(this.state.artist.SoundCloud != null) ? (
                                <a href={this.state.artist.SoundCloud} target="_blank">
                                    <img className=" img-responsive social-media" src="/images/soundcloud.png" />
                                </a>) : <span/>}
                            {(this.state.artist.Spotify != null) ? (
                                <a href={this.state.artist.Spotify} target="_blank">
                                    <img className="img-responsive social-media" src="/images/spotify.png" />
                                </a>) : <span/>}
                        </div>
                    </div>
                    <div className="col col-xs-0 col-sm-10 col-md-10 col-lg-10 col-md-offset-1 biography-container-public">
                        {this.state.artist.Biography}
                    </div>
                    <div className="col col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
        );
    }
}