import React from 'react';
import VideoListItem from './video_list_item';

const VideoList=(props)=>{

	const videoItems=props.videos.map((video)=>{
		return (
			<VideoListItem 
				video={video} 
				key={video.etag}
				onVideoSelect={props.onVideoSelect}
			/> 
		)
		/*{If key not given then for rendering a specific card 
		on stack ,entire stack has to be rendered or remade}*/
	});
	return (
		<ul className="col-md-4 list-group">
		{videoItems}
		</ul>
		);
};
 export default VideoList;