import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";
function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section class="container">
        <div class="post bg-white p1">
          <div>
            {posts.map(post => (
              <p key={post.id}>{post.title}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataFetching;
