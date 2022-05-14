// import GifData from "./components/GifData";
import Button from "./components/Button";
import {useState} from "react";

function App() {
  const API_KEY="iNUsyQg5VuzWe4C9sjkyAjLZ0plJUgig"
  
  const [gifData, setGifData] = useState(null)
  
  const getGifData = async (butClick) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    const data = await response.json()
    setGifData(data.data)
    // console.log(gifData.url)
  }
  
  return (
  <div className="App">
    <h1>Giphy</h1>
    <Button />
  </div>
  )
}

export default App;