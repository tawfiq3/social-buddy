import React from 'react';

const CommentDetails = (props) => {
    const {postId,id,name,email,body} = props.pd

    return (
        <div style={{
            border: '3px solid grey',
            padding: '30px',
            margin: '20px',
            backgroundColor: 'lightBlue'
        }}>
             <h5>Post No: {postId}</h5>
             <h4>Commentor's Id: {id}</h4>
            <p>{name}</p>
            <p>Email: {email}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default CommentDetails;