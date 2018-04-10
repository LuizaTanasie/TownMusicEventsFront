import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import { GenreService } from 'services/GenreService';
import { Link } from 'react-router-dom';
import "style/artist-profile.less"


export class ArtistPublicProfile extends React.Component<{ artistId: number }, { artist: any, genres: any }>
{

    constructor() {
        super();
        this.state = { artist: '', genres: [] };
    }

    componentDidMount() {
        ArtistService.getArtist(this, this.props.artistId);
        GenreService.getGenresForArtist(this, this.props.artistId);
    }

    render() {
        let genres = this.state.genres.map(function (object: any, i: any) {
            return <span>{object.value} | </span>
        })
        return (
            <div className="page-container">
                <div className="container-regular">
                    <div className="col col-xs-0 col-sm-6 col-md-6 col-lg-6 col-md-offset-1">
                            <img className="img-responsive" src={this.state.artist.PictureUrl} />
                        <div>
                            <button className="button-sunt-fan">
                                <img className="img-responsive element-sunt-fan" src="/images/imafan.png" />
                                <span className="element-sunt-fan text-sunt-fan">Sunt <br />fan</span>
                            </button>
                        </div>
                    </div>
                    <div className="col col-xs-0 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="artist-name">{this.state.artist.Name}</div>
                        <div className="">| {genres} </div>
                        <div className="spacing-bottom">2234 fani</div>
                        <a href={this.state.artist.Facebook} >
                            <img className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 img-responsive social-media" src="/images/facebook.png" />
                        </a>
                        <a href={this.state.artist.Youtube} >
                            <img className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 img-responsive social-media" src="/images/youtube.png" />
                        </a>
                        <a href={this.state.artist.Instagram} >
                            <img className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 img-responsive social-media" src="/images/instagram.png" />
                        </a>
                        <a href={this.state.artist.Twitter} >
                            <img className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 img-responsive social-media" src="/images/twitter.png" />
                        </a>

                    </div>
                    <div className="col col-xs-0 col-sm-10 col-md-10 col-lg-10 col-md-offset-1 biography-container">
                        {this.state.artist.Biography}
                    </div>
                    <div className="col col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
        );
    }
}