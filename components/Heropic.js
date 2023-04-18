import "./Heropic.css"
import React, {Component} from 'react'

export class  Heropic extends Component {
 render() {
 return (
    <div className="heropic">
        <div className="heading" >
           <h1>{this.props.heading}</h1>
           <p>{this.props.text}</p> 
        </div>
    </div>
  )
}
}

