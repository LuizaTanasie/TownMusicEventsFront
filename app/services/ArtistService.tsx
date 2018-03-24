import { API } from 'objects/API';
import { ArtistProfileObject } from 'objects/ArtistProfileObject';

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

    static updateArtist(profile: any, obj: ArtistProfileObject) {
        var request = new Request(this.API, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify({ ArtistId: obj.id, Name: obj.name, Website: obj.website, Facebook: obj.fb, Twitter: obj.twitter,
                Instagram: obj.insta,YouTube: obj.yt,Biography: obj.biography, Picture1Url: obj.pic1, 
             Picture2Url: obj.pic2, Picture4Url: obj.pic4, Picture3Url: obj.pic3, Picture5Url: obj.pic5})
        });
        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                // profile.updateFailed();
            }
        })
            .then(function (data) {
               // profile.setState({ success: true });
            })
            .catch(function (error) {
                // peofile.updateFailed();
            })
    }

}