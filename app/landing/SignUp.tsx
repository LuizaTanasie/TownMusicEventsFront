import * as React from "react"
import { Link } from 'react-router-dom';

export class SignUp extends React.Component<{}, {}>
{



    render() {
        return (
            <div>
                <div className="bg">
                </div>
                <div className="col col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>
                <div className="signup-container col col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <div className="row spacing-big">
                        Alege rolul tău în cadrul comunității muzicale:
                    </div>
                    <div className="row spacing-big">
                        <img className="col col-xs-2 col-sm-2 col-md-2 col-lg-2 img-responsive icon-bg" src="/images/fan.png" />
                        <div className="col col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <strong>Fan</strong><br />
                            Descoperă noi artiști muzicali din România prin intermediul recomanărilor oferite
                            de platforma noastră.<br />
                            <Link to='/signup-fan' className="button-purple">Înregistrare ca fan</Link>
                        </div>
                    </div>
                    <div className="row spacing-big">
                        <img className="col col-xs-2 col-sm-2 col-md-2 col-lg-2 img-responsive icon-bg" src="/images/artist.png" />
                        <div className="col col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <strong>Artist muzical</strong><br />
                            Fie ca ești solo sau faci parte dintr-o trupă, promovează-ți imaginea și lasă-te descoperit
                            de noi potențiali fani.<br/> 
                            <Link to='/signup-artist' className="button-purple">Înregistrare ca artist muzical</Link>
                        </div>

                    </div>
                    
                    <div className="row spacing-big">
                        Ai deja cont?
                 <span className="link"><Link to='/login' > Autentifică-te</Link></span>
                    </div>
                </div>
                <div className="col col-xs-0 col-sm-2 col-md-2 col-lg-2"></div>
            </div>
        );
    }
}