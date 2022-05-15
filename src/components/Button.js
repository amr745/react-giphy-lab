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
    }

    return (
        <div>
            <button onClick={handleSubmit} onChange={handleChange}>Get Gif</button>
        </div>
    )
}