import { API } from 'objects/API';
import { VisitObject } from 'objects/VisitObject';

export class VisitService {

    static API = API.url + "/api/visit/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });


    static addVisit(page: any, obj: VisitObject) {

        var request = new Request(this.API, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ "ArtistId": obj.artistid, "FanId": obj.fanid, "HasClickedALink": obj.hasClicked })
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw ("add visit failed");
            }
        })
    }

    static GetNumberOfVisitsForArtistWeek(page: any, id: number) {
        var statistic: any;
        statistic = '';
        var time = 0;
        return fetch(this.API + "?artistId=" + id + "&whenVisited=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                statistic = data;
                console.log("visit week:"+data.HowMany);
            })
            .then(() => {
                page.setState({ visitW: statistic.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    static GetNumberOfVisitsForArtistMonth(page: any, id: number) {
        var statistic: any;
        statistic = '';
        var time = 1;
        return fetch(this.API + "?artistId=" + id + "&whenVisited=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                statistic = data;
            })
            .then(() => {
                page.setState({ visitM: statistic.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    static GetNumberOfVisitsForArtistYear(page: any, id: number) {
        var statistic: any;
        statistic = '';
        var time = 2;
        return fetch(this.API + "?artistId=" + id + "&whenVisited=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                statistic = data;
            })
            .then(() => {
                page.setState({ visitY: statistic.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    static GetNumberOfClicksForArtistWeek(page: any, id: number) {
        var statistic: any;
        statistic = '';
        var time = 0;
        return fetch(this.API + "?artistId=" + id + "&whenClicked=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                statistic = data;
            })
            .then(() => {
                page.setState({ clickedW: statistic.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    static GetNumberOfClicksForArtistMonth(page: any, id: number) {
        var statistic: any;
        statistic = '';
        var time = 1;
        return fetch(this.API + "?artistId=" + id + "&whenClicked=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                statistic = data;
            })
            .then(() => {
                page.setState({ clickedM: statistic.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    static GetNumberOfClicksForArtistYear(page: any, id: number) {
        var statistic: any;
        statistic = '';
        var time = 2;
        return fetch(this.API + "?artistId=" + id + "&whenClicked=" + time, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                statistic = data;
            })
            .then(() => {
                page.setState({ clickedY: statistic.HowMany })
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }
}