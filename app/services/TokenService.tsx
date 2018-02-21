import { TokenObject } from 'objects/TokenObject';
import {API} from 'objects/API';

export class TokenService {

    static API = API.url+"/api/token";

    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9','token': localStorage.getItem("token") });
    static getTokenData(page: any) {
        var tok: any;
        tok = '';

        let response = fetch(this.API,  { method: "GET", headers: this.headers })
        .then((response) => response.json())
        .then(function (data) {
                if (data.errorCode == "0")
                    tok = data;
                else throw(data);
            })
            .then( () =>
                page.setState({token : tok.message})
            )
            .catch(function (error) {
                //console.log(error);
            })
    }

    static isValid(page : any){

        let response = fetch(this.API,  { method: "GET", headers: this.headers })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else{
                throw("invalid token")
            }
        })
        .then(function(data){
            if(data.errorCode == "0"){
                page.setState({isLoggedIn : true})
            }
            else{
                page.setState({isLoggedIn : false})
            }
        })
            .catch(function (error) {
                page.setState({isLoggedIn : false})
            })
    }
    
}   