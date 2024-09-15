import React from 'react'
import classes from './NewPost.module.css'
import Modal from '../componests/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  return (
    <>
    <Modal>
        <Form method='post' className={classes.form}>
            <p>
                <label htmlFor="">Text</label>
                <textarea rows={3} id="body" name="body" required/>
            </p>
            <p>
                <label htmlFor="">Your Name</label>
                <input type='text' id="name" name='name' required/>
            </p>
            <p className={classes.actions}>
              <Link to={"/"} type='button'>Cancel</Link>
              <button>Submit</button>
            </p>
        </Form>
    </Modal>
    </>
  )
}

export default NewPost

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts',{
    method: 'POST',
    body: JSON.stringify(postData),
    headers:{
      'Content-Type': 'application/json',
    }
  })
  return redirect('/');
}