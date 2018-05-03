import { API } from 'objects/API';
import { SignUpUserObject } from 'objects/SignUpUserObject';

export class SignUpService {

    static API = API.url + "/api/signup/";

    static signUpFan(page: any, obj: SignUpUserObject) {
        var myheader = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });

        var request = new Request(this.API, {
            method: "POST",
            headers: myheader,
            body: JSON.stringify({ "Email": obj.email, "Password": obj.password, "Name": obj.name })
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw ("signup failed");
            }
        })
            .then((data) => localStorage.setItem("token", data))
            .catch(function (error) {
            })
    }

        static signUpArtist(page: any, obj: SignUpUserObject, genres:any) {
        var myheader = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });

        var request = new Request(this.API+"artist/", {
            method: "POST",
            headers: myheader,
            body: JSON.stringify({ "Email": obj.email, "Password": obj.password, "Name": obj.name, "genres": genres })
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw ("signup failed");
            }
        })
            .then((data) => localStorage.setItem("token", data))
            .catch(function (error) {
            })
    }

    static postQuizAnswers(page: any, ratings: any, genres: any) {
        var myheader = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' , 'token': localStorage.getItem("token") });

        var request = new Request(this.API + "quiz/", {
            method: "POST",
            headers: myheader,
            body: JSON.stringify({ "ratings": ratings, "genres": genres })
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw ("signup failed");
            }
        })
            .catch(function (error) {
            })
    }
}   