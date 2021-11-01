import React, { Component } from 'react'
import Childcomp from './Childcomp'

class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname: 'parent'
        }
        this.greetparent = this.greetparent.bind(this)
    }
    greetparent(){
        alert(`hello ${this.state.parentname}`)
    }
    
    render() {
        return (
            <div>
                <Childcomp greethandler={this.greetparent} />
            </div>
        )
    }
}


export default Parentcomp
