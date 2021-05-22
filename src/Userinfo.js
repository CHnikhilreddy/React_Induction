import {Component} from 'react'

export default class Userinfo extends Component {
    
    render(){
        return (<div>
            <h1 onClick={()=>{this.props.onselect()}}>{this.props.name}</h1>
            </div>)
    }
}