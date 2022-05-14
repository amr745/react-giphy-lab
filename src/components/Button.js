// import React, { useState } from "react";

// export default function Button(gif) {sw
//     const [buttonState, setButtonState] = useState(null);

//     const handleClick = (newState) => {
//         setButtonState(newState);
//     };

//     const giphy = gif.map((ele, index) => {
//         return (
//             <img className="pic" src={ele.url} alt={ele.title} key={index} onClick={()=>handleClick(ele.url)}/>
//         )
//     });

//     return (
//         <div className="Button">
//             <div id="wrapper">
//             <button onClick={() => handleClick(giphy)}>Click for Gif!</button>
//             </div>
//         </div>
//     )
// }
