import * as React from "react"
import { Link } from 'react-router-dom';

export class ArtistListView extends React.Component<{ artistId:string, imgurl: string, name: string }, {}>
{

    ///rgba(85, 59, 75, 0.9)
    render() {
       let artistUrl = "artist/"+this.props.artistId;
        return (
            <Link className="listview-item" to={artistUrl}>
                <div className="listview-image "><img className="img-responsive" src={this.props.imgurl}></img></div>
                <div className="listview-image-after"> </div>
                
                <div className="text-overlay-list-item">{this.props.name}</div>
            </Link>
        );
    }
};