import React from 'react'
import { useState } from 'react';
import classes from './NewPost.module.css'
import Modal from '../componests/Modal';
import { Link } from 'react-router-dom';

function NewPost({onAddPost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredName, setEnteredName] = useState('');

 
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }

   function submitHandller(event){
    event.preventDefault();
    const postData ={
      body: enteredBody,
      name: enteredName
    }
    onAddPost(postData)
   }
  return (
    <>
    <Modal>
        <form className={classes.form} onSubmit={submitHandller}>
            <p>
                <label htmlFor="">Text</label>
                <textarea rows={3} id="body" required onChange={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor="">Your Name</label>
                <input type='text' id="name" required onChange={changeNameHandler}/>
            </p>
            <p className={classes.actions}>
              <Link to={"/"} type='button'>Cancel</Link>
              <button>Submit</button>
            </p>
        </form>
    </Modal>
    </>
  )
}

export default NewPost