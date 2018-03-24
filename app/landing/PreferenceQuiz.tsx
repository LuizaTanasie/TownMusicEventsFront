import * as React from "react"
import Select from "react-select"
import { GenreService } from 'services/GenreService';
import { ListView } from 'components/ListView';
import { ArtistSignUpListView } from 'components/ArtistSignUpListView';
import { LastFMService } from 'services/LastFMService';
import 'react-select/dist/react-select.css';

export class PreferenceQuiz extends React.Component<{}, { genres: any, selectedGenres: any, topArtistsRomania: any, topRomanianArtists: any }>
{
    constructor() {
        super();
        this.state = { genres: [], selectedGenres: [], topArtistsRomania: [], topRomanianArtists: [] }
        this.changeSelectedGenres = this.changeSelectedGenres.bind(this);
    }
    private ratings : Array<any> = [];

    changeSelectedGenres(val: any) {
        console.log("Selected: " + JSON.stringify(val));
        this.setState({ selectedGenres: val });
    }

    giveRating(val:any,name:string, id:string){
        console.log(val,name,id);
        this.ratings.push({val,name,id});
    }

    componentDidMount() {

        GenreService.getAllGenres(this);
        LastFMService.getTopRomania(this);
        LastFMService.getTopRomanian(this);
    }

    render() {
        const listItems = this.state.topArtistsRomania.map((artist: any) => <li>{artist.name}</li>)
        return (
            <div>
                Pentru a-ti putea recomanda cei mai potriviti artisti muzicali,<br />
                vrem sa stim mai multe despre tine. Cu cat ne poti oferi mai multe informatii,
                cu atat sugestiile noastre vor fii mai personalizate.
            <br />
                <div className="spacing">
                <div className="subtitle">
                    1. Alege genurile tale de muzica preferate:<br /><br />
                    </div>
                    <Select
                        name="form-field-genre"
                        options={this.state.genres}
                        multi={true}
                        joinValues
                        matchPos="start"
                        ignoreCase={true}
                        openOnFocus={true}
                        placeholder="Selecteaza genuri"
                        noResultsText="Nu exista rezultate"
                        value={this.state.selectedGenres}
                        onChange={this.changeSelectedGenres}
                    />
                </div><br/>
                <div className="spacing">
                <div className="subtitle">
                    2. Evalueaza urmatorii artisti autohtoni. Daca nu i-ai ascultat niciodata, nu trebuie sa le acorzi o nota.
                    </div>
                    <br /><br />
                    <ListView elements={
                        this.state.topArtistsRomania.slice(0, 10).map((artist: any, i: any) =>
                            
                             <ArtistSignUpListView imgurl={artist.image[2]["#text"]} name={artist.name}  id={artist.mbid}
                            giveRating={this.giveRating} />                        
                        )
                    } />
                </div>
                <br />
                <div className="spacing">
                <div className="subtitle">
                    3. Evalueaza urmatorii artisti din Romania. Daca nu i-ai ascultat niciodata, nu trebuie sa le acorzi o nota.
                </div><br /><br />
                    <ListView elements={
                        this.state.topRomanianArtists.slice(0, 10).map( (artist: any, i: any) =>
                            <ArtistSignUpListView imgurl={artist.image[2]["#text"]} name={artist.name} id={artist.mbid} 
                            giveRating={this.giveRating} />
                        
                        )
                    } />
                    <div className="float-right">
                    <button className="button-purple">Inregistrare</button>
                    </div>
                </div>
            </div>
        );
    }
}