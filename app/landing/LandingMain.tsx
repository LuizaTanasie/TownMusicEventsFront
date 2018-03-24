import * as React from "react"
import { Link } from "react-router-dom";

export class LandingMain extends React.Component<{}, {}>
{



    render() {
        return (
            <div>
                <div className="bg">
                </div>
                <div className="wrapper">
                    <div className="middle-text-landing spacing-bottom">
                        Descoperă noi artiști muzicali potriviți preferințelor tale.
                        <br />
                        <div className="middle-text-landing-small ">
                            Ne propunem să îți lărgim orizonturile muzicale și tototdată să promovăm artiștii români,
                            <br/> oferind sugestii personalizate pentru fiecare ultilizator.
                        </div>
                        
                   
                        </div>
                        <Link to='/signup' className="button-signup">Înregistrează-te</Link>
                    </div>

                </div>
                );
    }
}