import * as React from "react"

export class PrivateProfileArtist extends React.Component <{id : number},{}>
{
    render(){
        return (
            <div>
            Hello artist, {this.props.id}
            </div>
        );
    }
}