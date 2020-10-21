import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../../CommentDetails/CommentDetails';

const PostDetails = () => {
    const {postId} = useParams()    
    console.log(postId)
    const [postDetails,setPostDetails] = useState([])
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setPostDetails(data) )
    },[])
    
    return (
        <div>
            {
                postDetails.map(pd => <CommentDetails pd={pd}/> )
            }
        </div>
    );
};

export default PostDetails;