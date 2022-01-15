import React from 'react';
import Video from './Video';

const MainContainer = ({videos}) => {
  console.log(videos)
  return (
    <div className="main-container">
      <Video videos={videos}/>
    </div>
  );
};

export default MainContainer;