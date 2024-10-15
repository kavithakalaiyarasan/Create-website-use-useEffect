import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Beautiful Posts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="posts-grid">
          {posts.slice(0, 12).map((post) => (
            <div key={post.id} className="card">
            
              <img
                src={`https://picsum.photos/300/200?random=${post.id}`}
                alt="Post Thumbnail"
                className="post-image"
              />
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
