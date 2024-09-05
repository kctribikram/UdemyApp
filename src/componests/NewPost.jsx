import React from 'react'
import classes from './NewPost.module.css'

function NewPost(props) {
  return (
    <>
        <form className={classes.form}>
            <p>
                <label htmlFor="">Text</label>
                <textarea rows={3} id="body" onChange={props.onBodyChange}/>
            </p>
            <p>
                <label htmlFor="">Your Name</label>
                <input type='text' id="name" onChange={props.onNameChange}/>
            </p>
        </form>
    </>
  )
}

export default NewPost