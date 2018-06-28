import { API } from 'objects/API';

export class GenreService {

    static API = API.url + "/api/genre/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });

    static getAllGenres(page: any) {
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

    static addGenres(page: any,id: any,genres:any) {
        var rating: any;
        rating = '';
        var request = new Request(this.API, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ "ratings": id, "genres": genres  })
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json()
                    .then(function(data) { 
                        page.setState({ success: true, errorMsg:''})
                    })
            }
            else {
                return response.json()
                    .then(function (error) {
                        page.setState({ errorMsg: error.Message, success:false })
                    });
            }
        })
            .catch(function (error) {
                console.log(error);
            })
    }


    static getGenresForArtist(page: any, artistId: number) {
        var genres: any;
        genres = '';
        return fetch(this.API + "?idArtist=" + artistId, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                genres = data;
            })
            .then(() => {
                page.setState({ genresArtist: genres })
                console.log(genres);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })

    }

    static getGenresForFan(page: any, fanId: number) {
        var genres: any;
        genres = '';
        return fetch(this.API + "?idFan=" + fanId, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                genres = data;
            })
            .then(() => {
                page.setState({ genresFan: genres })
                console.log(genres);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })

    }
}