import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = (props) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const id = props.match.params.postId;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      
  }, []);

  return (
    <div className="container mt-2">
      {
        post
        ? (
          <div>
            <h4 className="text-center">{post.title}</h4>
            <p>{post.body}</p>
          </div>
        )
        : <h5>{error}</h5>
      }
    </div>
  );
}

export default Post;