import { API } from 'objects/API';
import { RatingObject } from 'objects/RatingObject';

export class RatingService {

    static API = API.url + "/api/rating/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });

    static getRatingForAnArtist(page: any, artistId: number, fanId: number) {
        var rating: any;
        rating = '';
        return fetch(this.API + "?artistId=" + artistId + "&fanId=" + fanId, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                rating = data;
            })
            .then(() => {
                page.setState({ rating: rating })
            })
            .catch(function (error) {
                console.log('request failed', error)

            })
    }

    static getNoOfGoodRatingsForArtistWeek(page: any, artistId: number) {
        var ratings: any;
        ratings = '';
        var time = 0;
        return fetch(this.API + "?artistId=" + artistId + "&when=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                ratings = data;
            })
            .then(() => {
                page.setState({ ratingsW: ratings.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }
    static getNoOfGoodRatingsForArtistMonth(page: any, artistId: number) {
        var ratings: any;
        ratings = '';
        var time = 1;
        return fetch(this.API + "?artistId=" + artistId + "&when=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                ratings = data;
            })
            .then(() => {
                page.setState({ ratingsM: ratings.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }
    static getNoOfGoodRatingsForArtistYear(page: any, artistId: number) {
        var ratings: any;
        ratings = '';
        var time = 2;
        return fetch(this.API + "?artistId=" + artistId + "&when=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                ratings = data;
            })
            .then(() => {
                page.setState({ ratingsY: ratings.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }


    static addRating(page: any, obj: RatingObject) {
        var rating: any;
        rating = '';
        var request = new Request(this.API, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ "ArtistId": obj.artistid, "FanId": obj.fanid, "Score": obj.rating })
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw ("rating failed");
            }
        })
            .catch(function (error) {
                console.log('request failed', error);
            })
    }

}
