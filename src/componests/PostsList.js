import React from 'react'
import Post from './Post'
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredName, setEnteredName] = useState('');

  function hideModalHandler(){
    setModalIsVisible(false);
  }
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }
  return (
    <>
    {modalIsVisible &&(
    <Modal onClose={hideModalHandler}>
      <NewPost 
        onBodyChange={changeBodyHandler} 
        onNameChange={changeNameHandler}
      />
    </Modal> )}
      <ul className={classes.posts}>
          <Post name={enteredName} body={enteredBody}/>
          <Post name="Melija" body="I know nothing- John Snow"/>
      </ul>
    </>
  )
}

export default PostsList