import React from "react";
const Hello = () => {
   // return(
     //   <div>
       //     <h1>hello world</h1>
        //</div>
    //)
    return React.createElement('div', null, React.createElement('h1', null, 'hello world'))
}
export default Hello