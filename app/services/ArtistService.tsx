import { API } from 'objects/API';

export class ArtistService {

    static API = API.url + "/api/artist/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });


    static getAllArtists(page: any) {
        var artists: any;
        artists = '';
        return fetch(this.API, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                artists = data;
            })
            .then(() => {
                page.setState({ artists: artists })
                console.log(artists);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })

    }

    static getArtist(page: any, id: number) {
        var artist: any;
        artist = '';
        return fetch(this.API + id, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                artist = data;
            })
            .then(() => {
                page.setState({ artist: artist })
                console.log(artist);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })

    }
}