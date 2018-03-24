import * as React from "react"
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class ListView extends React.Component<{elements :Array<any>},{}>
{
  constructor() {
    super();
  }

        
  render(){
    return (
        <div className="list-group">
          {this.props.elements.map(function(listValue){
              return <div>{listValue}</div>;
          })}
        </div>
    );
  }
};