import React from 'react';


const VideoListItem = ( { video, onVideoSelect } ) => {
    console.log(video);
    const ItemUrl = video.snippet.thumbnails.default.url;
    return(
            <li onClick = {() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list-media">
                    <div className="media-left">
                        <img src={ItemUrl} alt={ItemUrl} width="100%" />
                    </div>
                    <div className="media-right">
                        <p className="video-title">{video.snippet.title}</p>
                    </div>
                </div>
            </li>
        )
    }
    
export default VideoListItem;