import React, {Component} from "react";

class Welcome extends Component{

    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState(
            {
                message: 'thanks for subscribing'
            }
        )
    }

    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Welcome