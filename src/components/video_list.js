import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItem = props.videos.length > 0 && props.videos.map((video) => {
        return <VideoListItem 
                    video={video} 
                    onVideoSelect = {props.onVideoSelected}
                    key={video.etag} 
                />
    })
return(
        <ul className="col-md-3 list-group">
            {videoItem}
        </ul>
    )
}

export default VideoList;