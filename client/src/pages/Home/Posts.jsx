import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setposts] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/posts/posts`);
      if (res) {
        console.log(res);
        setposts(res.data.posts);
      } else {
        console.log("Unknown error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts !== null &&
        posts.map((e, i) => (
          <div className="" key={i}>
            <p>Posted by {e.name}</p>
            <img src={e.link} alt="" className="w-fit my-3 rounded-md" />
            <p>{e.message}</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;
