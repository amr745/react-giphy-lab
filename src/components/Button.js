import React, { useState } from "react";

export default function Button(props) {
    const [buttonState, setButtonState] = useState(
        {
            butClick: ""
        }
    )

    const handleChange = (event) => {
        const newState = {...buttonState}
        newState[event.target.name] = event.target.value
        setButtonState(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getGifData(buttonState.butClick)
        setButtonState({
            butClick: ""
        })
    }
    
    return (
        <div className="container">
            {/* <form>
                <input type="button" onClick={handleSubmit} onChange={handleChange} value="Get Gif"/>
            </form> */}
            <button onClick={handleSubmit} onChange={handleChange}>Get Gif</button>
        </div>
    )
}