import React, {useState} from 'react';
import { BsSearch, BsMicFill,BsBell } from 'react-icons/bs';
import { RiVideoAddLine } from 'react-icons/ri';
import {MdApps} from 'react-icons/md';
import user from '../images/user.jpg';

function Search({onSubmit}) {
  
  const [searchTerm, setSearchTerm]= useState('');

  const handlerSubmit=(e)=>(setSearchTerm(e.target.value));

  const keyPress=(e)=>{
    
    if(e.key==='Enter'){
      onSubmit(searchTerm);
    }
  }

  return (
    <>
      <div className="search-container">
        <input
         type="text"
         className="search-input"
         placeholder='запрос для поиска'
         onChange={handlerSubmit}
         value={searchTerm}
         onKeyPress={keyPress}
         />
        <button className='button' onClick={()=>onSubmit(searchTerm)}><BsSearch/></button>
        <BsMicFill  className='micro'/>
      </div>

     
        <div className="users_set">
          <RiVideoAddLine />
          <MdApps/>
          <BsBell/>
          <img src={user} alt="avatar" className='avatar'/>
        </div>
      
    </>
  );
}

export default Search;