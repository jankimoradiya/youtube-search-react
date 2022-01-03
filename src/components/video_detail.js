import React from 'react';

const videoDatail = ({ video }) => {
    console.log(video);
    if( !video ){
        return <div>Loading...!!!</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
        return(
            <div className="col-md-9 video-detail">
                <div className="">
                    <iframe className="ifram-embed" title="youtube-video" src={url} height="500px" width="100%"></iframe>
                </div>
                <div className="media-detail">
                    <h2 className="media-title">{ video.snippet.title }</h2>
                    <p className="media-description">{ video.snippet.description }</p>
                </div>
    
            </div>
        )
}

export default videoDatail;