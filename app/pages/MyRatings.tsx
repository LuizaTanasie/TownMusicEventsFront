import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistWithRatingListView } from 'components/ArtistWithRatingListView';
import { ArtistService } from 'services/ArtistService';
import "style/all-artists-page.less"

export class MyRatings extends React.Component<{ fanId: number }, { artists: any }>
{

    constructor() {
        super();
        this.state = { artists: [] };
    }

    componentDidMount() {
        ArtistService.getArtistsRatedByAFan(this,this.props.fanId);
    }

    render() {
        let artists = this.state.artists.map( (object: any, i: any) =>
            <ArtistWithRatingListView imgurl={object.PictureUrl} name={object.Name} 
            artistId={object.ArtistId} rating={object.Score} fanId={this.props.fanId}/>
        )
        return (
            <div className="page-container">
                <div className="dashboard-page-container">
                    
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