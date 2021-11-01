import React, { Component } from 'react'

 class Classclick extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             message: 'Hello'
              
         }
        // this.Clickhandler = this.Clickhandler.bind(this)
     }
     Clickhandler =() => {
         this.setState({
             message: 'Goodbye'
         })
        }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.Clickhandler}>click me</button>
            </div>
        )
    }
}

export default Classclick
