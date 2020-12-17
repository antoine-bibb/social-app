import React, { useState, useEffect } from "react";
import EditPost from "./EditDelete/EditPost";
import DeletePost from "./EditDelete/DeletePost";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

const MyPost = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <div key={post.id} className="my-post">
        <h2 className="title">Title: {post.title}</h2>
        <img src={post.img_url} alt={post.title} />
        <EditPost
          postId={post.id}
          postValues={post}
          setPost={setPost}
          post={post}
        >
          <h3>Edit Post</h3>
        </EditPost>
        <DeletePost postId={post.id}>Delete Post</DeletePost>
      </div>
    </div>
  );
};

export default MyPost;
