import * as React from "react"
import StackGrid from 'react-stack-grid';
import { ArtistListView } from 'components/ArtistListView';
import { ArtistService } from 'services/ArtistService';
import "style/all-artists-page.less"

export class Dashboard extends React.Component<{}, { artists: any, searchValue: string, message404:string }>
{

    constructor() {
        super();
        this.state = { artists: [], searchValue: '',message404:'' };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        ArtistService.getAllArtists(this);
    }

    handleSearch(event: any) {
        event.preventDefault();
        this.setState({message404 : ""});
        if (event.currentTarget.value == null || event.currentTarget.value == "") {
            ArtistService.getAllArtists(this);
        }
        else {
            ArtistService.searchForArtists(this, event.currentTarget.value);
        }
    }

    handleNotFoundMessage(){
        this.setState({artists:[]});
        this.setState({message404 : "Nu există artiști cu acest nume"});
    }

    render() {
        let artists = this.state.artists.map(function (object: any, i: any) {
            return <ArtistListView imgurl={object.PictureUrl} name={object.Name} artistId={object.ArtistId} />;
        })
        return (
            <div className="page-container">
                <div className="dashboard-page-container">
                    <input type="text" className="searchbar" name="search" onChange={this.handleSearch} placeholder="Caută.." />
                    <div className="message404">{this.state.message404}</div>
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