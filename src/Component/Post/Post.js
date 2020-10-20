import React from 'react';
import  './Post.css'
import Button from '@material-ui/core/Button';

const Post = (props) => {
    const {id,title,body} = props.post;
    return (
        <div className='postClass'>
            <h4>Post No: {id}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            <Button variant="contained" color="primary">
              See Details
            </Button>
            
        </div>
    );
};

export default Post;