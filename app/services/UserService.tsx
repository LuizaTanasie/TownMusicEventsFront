import { API } from 'objects/API';

export class UserService {

    static API = API.url + "/api/user/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });


static changePassword(page: any, id:any, oldpass:string, newpass:string) {
      
        var request = new Request(this.API + "?idUser=" +id + "&oldPassword=" + oldpass + "&newPassword=" + newpass,
            {
                method: "PUT",
                headers: this.headers,
            });
        let response = fetch(request).then(function (response) {
            if (response.ok) {
                page.setState({ success: true , errorMsg:'' });

            }
            else if (response.status == 400) {
                throw response.json();
            }
        })
            .catch(function (error) {
                return error;
            })
            .then(function (error) {
                page.setState({ errorMsg: error.Message, success:false });
            })
    }

    static getUser(page: any, id: number) {
        var user: any;
        user = '';
        return fetch(this.API + id, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                user = data;
            })
            .then(() => {
                page.setState({ user: user })
                console.log(user);
            })
            .catch(function (error) {
                console.log('request failed', error)

            })
    }

}