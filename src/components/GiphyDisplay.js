export default function GiphyDisplay({gifData}){

    if (gifData) {

        return (
            <div className>
                <img src={gifData.images.downsized_medium.url} alt={gifData.title} />
                <h3>{gifData.title.toUpperCase()}</h3>
            </div>
        );
    } else {
        return <h2>Click The Button For a Gif</h2>
    }
};