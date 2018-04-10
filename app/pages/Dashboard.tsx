import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import "style/all-artists-page.less"

export class Dashboard extends React.Component<{}, { artists: any }>
{

    constructor() {
        super();
        this.state = { artists: [] };
    }

    componentDidMount() {
        ArtistService.getAllArtists(this);
    }

    render() {
        let artists = this.state.artists.map(function (object: any, i: any) {
            return <ArtistListView imgurl={object.PictureUrl} name={object.Name} artistId={object.ArtistId} />;
        })
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