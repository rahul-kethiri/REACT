import React, { Component } from 'react'

class Usergreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin: false
        }
    }
    
    render() {
        //if(this.state.isloggedin){
          //  return (
            //    <div>
              //      hello rahul
                //</div>
            //)
     
        //}else{
          //  return(
            //    <div>
              //      hello guest
                //</div>
            //)
        //}
    //    return this.state.isloggedin ?
      //  <div>hello</div> :
        //<div>hey</div>
        return this.state.isloggedin && <div>hey</div>
       
    }
}

export default Usergreeting
