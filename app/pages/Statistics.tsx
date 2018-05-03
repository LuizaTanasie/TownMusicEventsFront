import * as React from "react"
import StackGrid from 'react-stack-grid';
import { VisitService } from 'services/VisitService';
import { RatingService } from 'services/RatingService';

export class Statistics extends React.Component<{ artistId: number }, {
    visitW: number, visitM: number,
    visitY: number, ratingsW: number, ratingsM: number, ratingsY: number, clickedW: number, clickedM: number,
    clickedY: number
}>
{

    constructor() {
        super();
        this.state = {
            visitW: 0, visitM: 0,
            visitY: 0, ratingsW: 0, ratingsM: 0, ratingsY: 0, clickedW: 0, clickedM: 0,
            clickedY: 0
        };
    }

    componentDidMount() {
        VisitService.GetNumberOfClicksForArtistMonth(this, this.props.artistId);
        VisitService.GetNumberOfClicksForArtistYear(this, this.props.artistId);
        VisitService.GetNumberOfClicksForArtistWeek(this, this.props.artistId);
        VisitService.GetNumberOfVisitsForArtistMonth(this, this.props.artistId);
        VisitService.GetNumberOfVisitsForArtistWeek(this, this.props.artistId);
        VisitService.GetNumberOfVisitsForArtistYear(this, this.props.artistId);
        RatingService.getNoOfGoodRatingsForArtistWeek(this, this.props.artistId);
        RatingService.getNoOfGoodRatingsForArtistMonth(this, this.props.artistId);
        RatingService.getNoOfGoodRatingsForArtistYear(this, this.props.artistId);
    }

    render() {
        return (
            <div className="page-container">
                <div className="container-regular">
                 <div className="col col-xs-0 col-sm-6 col-md-6 col-lg-6 col-md-offset-2">
                    <h1>În ultima săptămână...</h1>
                    <div>Profilul ți-a fost vizitat de <span className="subtitle">{this.state.visitW}</span> ori,</div>
                    <div>dintre care de <span className="subtitle">{this.state.clickedW}</span> ori au fost accesate cel puțin unul dintre link-urile tale.</div>
                    <div>De asemenea, ai primit <span className="subtitle">{this.state.ratingsW}</span> rating-uri pozitive (mai mari sau egale cu 3).</div>
                    <h1>În ultima lună...</h1>
                    <div>Profilul ți-a fost vizitat de <span className="subtitle">{this.state.visitM}</span> ori,</div>
                    <div>dintre care de <span className="subtitle">{this.state.clickedM}</span> ori au fost accesate cel puțin unul dintre link-urile tale.</div>
                    <div>De asemenea, ai primit <span className="subtitle">{this.state.ratingsM}</span> rating-uri pozitive (mai mari sau egale cu 3).</div>
                    <h1>În ultimul an...</h1>
                    <div>Profilul ți-a fost vizitat de <span className="subtitle">{this.state.visitY}</span> ori,</div>
                    <div>dintre care de <span className="subtitle">{this.state.clickedY}</span> ori au fost accesate cel puțin unul dintre link-urile tale.</div>
                    <div>De asemenea, ai primit <span className="subtitle">{this.state.ratingsY}</span> rating-uri pozitive (mai mari sau egale cu 3).</div>
                    </div>
                </div>
            </div>
        );
    }
}