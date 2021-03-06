import { API } from 'objects/API';
import { ArtistProfileObject } from 'objects/ArtistProfileObject';

export class RecommendationService {

    static API = API.url + "/api/recommendation/";
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });


    static getRecommendations(page: any, fanId: number) {
        var artists: any;
        artists = '';
        return fetch(this.API + "?fanId=" + fanId, { method: "GET", headers: this.headers })
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                        .then(function (data) {
                            artists = data;
                        })
                        .then(() => {
                            console.log(artists);
                            page.setState({ artists: artists })
                        })
                        .then(() => page.setState({ loaded: true }))
                }
                if (response.status == 404) {
                    page.handleNotFoundMessage();
                }
                throw response;
            })
            .catch(function (error) {
                console.log('request failed', error)
            })

    }

}