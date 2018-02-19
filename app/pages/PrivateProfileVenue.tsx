import * as React from "react"

export class PrivateProfileVenue extends React.Component <{id : number},{}>
{
    render(){
        return (
            <div>
            Hello venue owner, {this.props.id}
            </div>
        );
    }
}