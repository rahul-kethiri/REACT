import React from 'react'

function Childcomp(props) {
    return (
        <div>
            <button onClick={props.greethandler}>Greet parent</button>
        </div>
    )
}

export default Childcomp
