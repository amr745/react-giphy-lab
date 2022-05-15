import Button from "./components/Button";
import GiphyDisplay from "./components/GiphyDisplay"
import {useEffect, useState} from "react";

function App() {
  const API_KEY="iNUsyQg5VuzWe4C9sjkyAjLZ0plJUgig"
  
  const [gifData, setGifData] = useState(null)
  
  const getGifData = async (butClick) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    const data = await response.json()
    setGifData(data.data)
    // console.log(gifData.url)
  }

  useEffect(() => {
    getGifData();
  }, []);
  
  return (
  <div className="App">
    <h1>Giphy</h1>
    <Button getGifData={getGifData}/>
    <GiphyDisplay gifData={gifData}/>
  </div>
  )
}

export default App;