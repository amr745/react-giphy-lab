export default function GiphyDisplay({gifData}){

    if (gifData) {

        return (
            <div>
                <h1>{gifData.title}</h1>
                <img src={gifData.images.downsized_medium.url} alt={gifData.title} />
            </div>
        );
    } else {
        return <h1>Click for a Gif</h1>
    }
};