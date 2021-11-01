import React from 'react'

function Functionclick() {
    function Clickhandler(){
        console.log('clicked')

    }
    return (
        <div>
            <button onClick={Clickhandler}>click</button>
        </div>
    )
}

export default Functionclick
