import * as React from "react"
import { Link } from 'react-router-dom';
import Rating from 'react-rating'
import { RatingObject } from 'objects/RatingObject';
import { RatingService } from 'services/RatingService';

export class ArtistWithRatingListView extends React.Component<{ artistId: number, fanId: number, imgurl: string, name: string, rating: number },
    { rating: any}>
{
public rating:number;

    constructor() {
        super();
        this.ratingChanged = this.ratingChanged.bind(this);
        this.state = { rating: -1 };
    }


    ratingChanged(val: any) {
        var ratingObject = new RatingObject();
        ratingObject.artistid = this.props.artistId;
        ratingObject.fanid = this.props.fanId;
        ratingObject.rating = val;
        RatingService.addRating(this, ratingObject);
    }

    render() {
        let artistUrl = "artist/" + this.props.artistId;
        return (
            <Link className="listview-item" to={artistUrl}>
                <div className="listview-image "><img className="img-responsive" src={this.props.imgurl}></img></div>
                <div className="listview-image-after"> </div>
                <div className="text-overlay-list-item">{this.props.name}
                    <span className="float-right">
                        <Rating onChange={this.ratingChanged} placeholderRating={this.props.rating} 
                        placeholderSymbol={<div className="placeholder-rating"></div>}
                                    fullSymbol={<div className="placeholder-rating"></div>}/>
                    </span>
                </div>
            </Link>
        );
    }
};