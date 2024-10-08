import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post({id, name, body}) {


  return (
    <>
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.name}> {name}</p>
        <p className={classes.body}> {body}</p>
      </Link>
    </li>
    </>
  )
}

export default Post 