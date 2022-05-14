// import {useState, useEffect} from "react";

// function GifData() {

//   const API_KEY="iNUsyQg5VuzWe4C9sjkyAjLZ0plJUgig"

//   const [gifData, setGifData] = useState(null)

//   const getGifData = async () => {
//     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
//     const data = await response.json()
//     setGifData(data)
//   }

//   useEffect(() => {
//       getGifData()
//   }, [])

//   return (
//     <div className="GifData">
//         <h1>{gifData.results}</h1>

//     </div>
//   );
// }
// export default GifData;