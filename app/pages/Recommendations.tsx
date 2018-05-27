import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { RecommendationService } from 'services/RecommendationService';
import "style/all-artists-page.less"

export class Recommendations extends React.Component<{ fanId: number }, { artists: any }>
{

    constructor() {
        super();
        this.state = { artists: [] };
    }

    componentDidMount() {
        RecommendationService.getRecommendations(this,this.props.fanId );
    }

    render() {
        let artists = this.state.artists.map(function (object: any, i: any) {
            return <ArtistListView imgurl={object.PictureUrl} name={object.Name} artistId={object.ArtistId} />;
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

                </div>
            </div>
        );
    }
}