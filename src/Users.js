import {Component, useEffect} from 'react'
import Userinfo from './Userinfo'

export default class Users extends Component {
    users = ['ikigai','lupin']
    userSelect(){
        console.log("user select worked")
    }
    render(){
        return (<div>
            {
            this.users.map((b)=>{
                return <Userinfo name={b} onselect={this.userSelect}></Userinfo>})
            }
            </div>
        )
    }
}