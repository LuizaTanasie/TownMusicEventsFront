import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import { RatingService } from 'services/RatingService';
import { GenreService } from 'services/GenreService';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'
import { RatingObject } from 'objects/RatingObject';
import "style/artist-profile.less"
import { VisitService } from 'services/VisitService';
import { VisitObject } from 'objects/VisitObject';

export class ArtistPublicProfile extends React.Component<{ artistId: number, fanId: number }, {
    artist: any,
    genresArtist: any, rating: any, hasClicked: boolean
}>
{

    constructor() {
        super();
        this.state = { artist: '', genresArtist: [], rating: { Score: -1 }, hasClicked: false };
        this.ratingChanged = this.ratingChanged.bind(this);
        this.hasClickedALink = this.hasClickedALink.bind(this);
    }

    componentDidMount() {
        ArtistService.getArtist(this, this.props.artistId);
        GenreService.getGenresForArtist(this, this.props.artistId);
        RatingService.getRatingForAnArtist(this, this.props.artistId, this.props.fanId);
    }

    componentWillUnmount() {
        var obj = new VisitObject();
        obj.artistid = this.props.artistId;
        obj.fanid = this.props.fanId;
        obj.hasClicked = this.state.hasClicked;
        VisitService.addVisit(this, obj);
    }

    hasClickedALink(event: React.FormEvent<HTMLAnchorElement>) {
        this.setState({ hasClicked: true });
    }

    ratingChanged(val: any) {
        var ratingObject = new RatingObject();
        ratingObject.artistid = this.props.artistId;
        ratingObject.fanid = this.props.fanId;
        ratingObject.rating = val;
        RatingService.addRating(this, ratingObject);
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
                        <div>
                            <div className="button-sunt-fan">
                                Acordă o notă:<br />
                                <Rating onChange={this.ratingChanged} placeholderRating={this.state.rating.Score}
                                    placeholderSymbol={<div className="placeholder-rating"></div>}
                                    fullSymbol={<div className="placeholder-rating"></div>} />
                            </div>
                        </div>
                    </div>
                    <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="artist-name">{this.state.artist.Name}</div>
                        <div className="">| {genres} </div>
                        <div className="spacing-top"><a className="link-button" href={this.state.artist.Website}>{this.state.artist.Website}</a> </div>
                        <div className="social-media-container">
                            {(this.state.artist.Facebook!= null) ? (
                                <a href={this.state.artist.Facebook} onClick={this.hasClickedALink} target="_blank">
                                    <img className="img-responsive social-media" src="/images/facebook.png" />
                                </a>) : <span/>}
                            {(this.state.artist.YouTube != null) ? (
                                <a href={this.state.artist.YouTube} onClick={this.hasClickedALink} target="_blank">
                                    <img className=" img-responsive social-media" src="/images/youtube.png" />
                                </a>) : <span/>}
                            {(this.state.artist.Instagram != null) ? (
                                <a href={this.state.artist.Instagram} onClick={this.hasClickedALink} target="_blank">
                                    <img className="img-responsive social-media" src="/images/instagram.png" />
                                </a>) : <span/>}
                            {(this.state.artist.Twitter != null) ? (
                                <a href={this.state.artist.Twitter} onClick={this.hasClickedALink} target="_blank">
                                    <img className="img-responsive social-media" src="/images/twitter.png" />
                                </a>) : <span/>}
                            {(this.state.artist.SoundCloud != null) ? (
                                <a href={this.state.artist.SoundCloud} onClick={this.hasClickedALink} target="_blank">
                                    <img className=" img-responsive social-media" src="/images/soundcloud.png" />
                                </a>) :<span/>}
                            {(this.state.artist.Spotify != null) ? (
                                <a href={this.state.artist.Spotify} onClick={this.hasClickedALink} target="_blank">
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