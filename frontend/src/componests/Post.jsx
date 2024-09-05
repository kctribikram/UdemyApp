import React from 'react'
import classes from './Post.module.css';

function Post({name, body}) {


  return (
    <>
    <li className={classes.post}>
        <p className={classes.name}> {name}</p>
        <p className={classes.body}> {body}</p>
    </li>
    </>
  )
}

export default Post 