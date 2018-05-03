import { API } from 'objects/API';

export class GenreService {

    static API = API.url + "/api/genre/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });

    static getAllGenres(page:any){
        var genres: any;
        genres = '';
        return fetch('http://localhost:6840/api/genre')
            .then((response) => response.json())
            .then(function (data) {
                genres = data;
            })
            .then(() => {

                page.setState({ genres: genres })
                console.log(genres);
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    static getGenresForArtist(page: any, artistId: number) {
        var genres: any;
        genres = '';
        return fetch(this.API+"?idArtist="+artistId, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                genres = data;
            })
            .then(() => {
                page.setState({ genres: genres })
                console.log(genres);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })

    }

    static getGenresForFan(page: any, fanId: number) {
        var genres: any;
        genres = '';
        return fetch(this.API+"?idFan="+fanId, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                genres = data;
            })
            .then(() => {
                page.setState({ genres: genres })
                console.log(genres);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })

    }
}