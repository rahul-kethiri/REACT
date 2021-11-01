import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments:'',
             topic:'vue'
        }
    }
    hndleusernamechange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    commentschange = event => {
        this.setState({
            comments:event.target.value
        })
    }

    changetopic = event => {
        this.setState({
            topic:event.target.value
        })
    }
    submit = event =>{
        alert(`${this.state.username}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.hndleusernamechange}/>

                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.commentschange} />
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.changetopic}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    </select>

                </div>
                <button type="submit">submit</button>


            </form>
           
        )
    }
}

export default Form
