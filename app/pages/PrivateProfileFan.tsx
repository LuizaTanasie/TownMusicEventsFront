import * as React from "react"

export class PrivateProfileFan extends React.Component <{id : number},{}>
{
    render(){
        return (
            <div>
            Hello fan, {this.props.id}
            </div>
        );
    }
}