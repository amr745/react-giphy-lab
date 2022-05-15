export default function GiphyDisplay({gifData}){

    if (gifData) {

        return (
            <div className="container">
                <img src={gifData.images.downsized_medium.url} alt={gifData.title} />
                <h1>{gifData.title.toUpperCase()}</h1>
            </div>
        );
    } else {
        return <h1>Click The Button For a Gif</h1>
    }
};