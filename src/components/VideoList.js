import React from 'react';
import videoImg from '../images/user.jpg';
import { BiDotsVerticalRounded} from 'react-icons/bi';
const VideoList = ({item}) => {
  return (
    <div className="video-list">

      <img src={item.snippet.thumbnails.high.url} alt="cover" />

      <div className="video-right">
         <h5>{item.snippet.title}</h5>
         {/* <p>{item.snippet.description}</p> */}
         <p>{item.snippet.channelTitle}</p>
      </div>

      <span>
     <BiDotsVerticalRounded/>
      </span>
    </div>
  );
};

export default VideoList;