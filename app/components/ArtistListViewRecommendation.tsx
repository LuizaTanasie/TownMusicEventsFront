import * as React from "react"
import { Link } from 'react-router-dom';

export class ArtistListViewRecommendation extends React.Component<{ artistId: string, imgurl: string, name: string, why:string }, {}>
{

    render() {
        let artistUrl = "artist/" + this.props.artistId;
        return (
            <Link className="listview-item" to={artistUrl}>
                <div className="listview-image "><img className="img-responsive" src={this.props.imgurl}></img></div>
                <div className="listview-image-after"> </div>

                <div className="text-overlay-list-item">{this.props.name}</div>
                <span className="tooltip2"><span className="question-mark">?</span>
                    <span className="tooltiptext2">{this.props.why}</span>
                </span>
            </Link >
        );
    }
};