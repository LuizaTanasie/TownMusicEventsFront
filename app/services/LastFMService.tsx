
export class LastFMService {

    static API = "http://ws.audioscrobbler.com/2.0/"
    static APIkey = "946df7d6bc0fbdaaf2c41b23a4cc48b2"
    static headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'token': localStorage.getItem("token") });

    static getTopRomania(page:any){
        var artists: any;
        artists = '';
        return fetch(this.API+"?method=geo.gettopartists&country=romania&api_key="+this.APIkey+"&format=json")
            .then((response) => response.json())
            .then(function (data) {
                artists = data;
            })
            .then(() => {
                page.setState({ topArtistsRomania: artists.topartists.artist })
                console.log(artists.topartists);
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

     static getTopRomanian(page:any){
        var artists: any;
        artists = '';
        return fetch(this.API+"?method=tag.gettopartists&tag=romanian&api_key="+this.APIkey+"&format=json")
            .then((response) => response.json())
            .then(function (data) {
                artists = data;
            })
            .then(() => {
                page.setState({ topRomanianArtists: artists.topartists.artist })
                console.log(artists.topartists);
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }
}