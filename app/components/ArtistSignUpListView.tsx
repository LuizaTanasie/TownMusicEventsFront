import * as React from "react"
import Rating from 'react-rating'
export class ArtistSignUpListView extends React.Component<{ id:string, imgurl: string, name: string, giveRating:any }, {rating:any}>
{

    constructor(){
        super();
        this.state={rating:0};
         this.ratingChanged = this.ratingChanged.bind(this);
    }

    ratingChanged(val: any) {
        this.props.giveRating(val, this.props.name, this.props.id)
    }

    render() {
        return (
            <div className="row spacing">
                <div className="col-md-4">
                    <img className="img-responsive" src={this.props.imgurl}></img>

                </div>
                <div className="col-md-7">
                    <div className=""><h4> {this.props.name}</h4> </div>
                    <Rating onChange={this.ratingChanged} placeholderSymbol={<div className="placeholder-rating"></div>}
                                    fullSymbol={<div className="placeholder-rating"></div>}/>
                </div>
            </div>
        );
    }
};