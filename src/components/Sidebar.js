import React from 'react';
import {CgHome} from 'react-icons/cg';
import {BiLike} from 'react-icons/bi';
import  Accodions from './Accordions';

import {MdOutlineExplore,MdOutlineWatchLater, MdOutlineVideoLibrary,MdHistory,MdOutlineOndemandVideo} from 'react-icons/md';

function Sidebar({showToogle}) {
  
  return (
    <div className={`sidebar ${showToogle ? 'swipe-sidebar': ''} `}>
      <div className="sidebar-list">
        <ul>
          <li><CgHome/><span>Home</span></li>
          <li><MdOutlineExplore/> <span>Explorer</span></li>
          <li><MdOutlineVideoLibrary/><span>Subscription</span></li>
        </ul>
        <span className="line"></span>
        <ul>
          <li><MdOutlineVideoLibrary/><span>Library</span></li>
          <li><MdHistory/><span>History</span></li>
          <li><MdOutlineOndemandVideo/><span>Video</span></li>
          <li><MdOutlineWatchLater/><span>Watch later</span></li>
          <li><BiLike/><span>Liked videos</span></li>
        </ul>
        <Accodions/>
      </div>
    </div>
  );
}

export default Sidebar;