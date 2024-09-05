import React from 'react'
import Post from './Post'
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredName, setEnteredName] = useState('');

 
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }
  return (
    <>
    {isPosting &&(
    <Modal onClose={onStopPosting}>
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