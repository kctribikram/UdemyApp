// import './App.css';
import { Outlet } from 'react-router-dom';
import PostsList from '../componests/PostsList';
import { useState } from 'react';

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
    <Outlet/>
      <main>
        <PostsList /> 
      </main>
    </>
  )
}

export default Posts; 
    