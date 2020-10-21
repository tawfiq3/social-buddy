import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Post from '../Post/Post';

const Home = () => {
    const [post,setPost] = useState([]);
    const history = useHistory()
    const handleButton = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then((data => setPost(data)))
    },[])

    return (
        <div>
            {
                post.map(post => <Post post={post} handleButton={handleButton}></Post>)
            }
        </div>
    );
};

export default Home;