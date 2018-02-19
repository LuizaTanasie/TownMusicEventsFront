
export class LogOutService {


    static LogOut() {
        localStorage.setItem("token","");
        window.location.replace("/");
    }
}   