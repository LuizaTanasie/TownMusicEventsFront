import {LoginObject} from 'objects/LogInObject';
import {API} from 'objects/API';

export class LoginService {

    static API = API.url+"/api/login/";

    static tryToLogIn(login : any,lg : LoginObject) {
        var myheader = new Headers({'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9'});

        var request = new Request(this.API, {
            method: "POST",
            headers: myheader,
            body: JSON.stringify({"email": lg.email, "password": lg.password})
        });

        let response = fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else{
                throw ("login failed");
            }
        })
            .then(function (data) {
                    localStorage.setItem("token", data);
            })
            .then(()=>login.changeRoute())
            .catch(function (error) {
                login.loginFailed();
            })    
    }
}   