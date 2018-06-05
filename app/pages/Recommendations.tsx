import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListViewRecommendation } from 'components/ArtistListViewRecommendation';
import { RecommendationService } from 'services/RecommendationService';
import "style/all-artists-page.less"

export class Recommendations extends React.Component<{ fanId: number }, { artists: any, notFound:string }>
{

    constructor() {
        super();
        this.state = { artists: [], notFound:''};
        this.handleNotFoundMessage = this.handleNotFoundMessage.bind(this);
    }

    componentDidMount() {
        RecommendationService.getRecommendations(this,this.props.fanId );
    }

    handleNotFoundMessage(){
        this.setState({notFound:"Ne pare rau :( Nu avem suficiente date sa iti furnizam recomandari potrivite."})
    }

    render() {
        let artists = this.state.artists.map(function (object: any, i: any) {
            return <ArtistListViewRecommendation why={object.Why} imgurl={object.PictureUrl} name={object.Name} artistId={object.Id} />;
        })
        return (
            <div className="page-container">
                <div className="dashboard-page-container">
                    <div className="subtitle spacing">Acesti artisti iti sunt recomandati...</div>
                    <StackGrid
                        columnWidth={"33.33%"} gutterWidth={0} gutterHeight={0}
                        monitorImagesLoaded={true}>

                        {artists}
                    </StackGrid>
                    <div className="simple-text">{this.state.notFound}</div>
                </div>
            </div>
        );
    }
}