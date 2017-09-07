import * as React from "react"
import { Link } from "react-router-dom";

export class LandingMain extends React.Component<{}, {}>
{



    render() {
        return (
            <div>
                <div className="middle-text-landing spacing-bottom">
                    Fii parte a comunității muzicale din Cluj-Napoca
                        <br />
                </div>
                <Link to='/signup' className="button-signup">Înregistrează-te</Link>
            </div>
        );
    }
}