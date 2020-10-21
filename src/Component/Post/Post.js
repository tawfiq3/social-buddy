import React from 'react';
import  './Post.css'
import Button from '@material-ui/core/Button';

const Post = (props) => {
    const {id,title,body} = props.post;
    const handleButton = props.handleButton;

    return (
        <div className='postClass'>
            <h4>Post No: {id}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            <Button onClick={() => handleButton(id)} variant="contained" color="primary">
             See more
            </Button>
            
        </div>
    );
};

export default Post;