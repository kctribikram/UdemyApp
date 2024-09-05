import './App.css';
import PostsList from './componests/PostsList';
import MainHeader from './componests/MainHeader';
import { useState } from 'react';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function showModalHandler(){
    setModalIsVisible(true);
  }
  function hideModalHandler(){
    setModalIsVisible(false);
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/> 
      </main>
    </>
  )
}

export default App; 
    