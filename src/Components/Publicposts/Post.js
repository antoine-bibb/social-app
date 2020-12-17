import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Comments from "../Publicposts/comments";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  const increase = () => {
    let newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem("likes", likes);
  };
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
      <Main key={post.id} className="my-post">
        <h2>Title: {post.title}</h2>
        <img src={post.img_url} alt={post.title} />
        <div id="likes" className="like-button">
          <button id="increase" onClick={increase}>
            <h1>&#128076;</h1>
            <div>likes {likes}</div>
          </button>
        </div>
        <h3> {post.body}</h3>
        <div>
          <Comments />
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
  /* border-bottom: 2px solid rgba(5, 5, 5, 0.4);
  border-left: 4px outset rgba(5, 5, 5, 0.4); */
  border-radius: 2px;
  width: 85%;
  margin: auto;
  margin-bottom: 10%;
  padding: 5% 0;
  background-color: ${(pr) => pr.theme.prime};
  cursor: pointer;
  border: 1px solid ${(pr) => pr.theme.secondaryColor};
  color: ${(pr) => pr.theme.secondaryColor};
  text-shadow: 1px 1px black;
  font-size: 1.2rem;
  &:hover {
    box-shadow: 2px 4px 15px 2px black;
  }
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 20px;
  }
  img {
    border-radius: 2px;
  }
  .txt {
    margin-top: 20px;
  }
  #likes {
    width: 10%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  span {
    display: flex;
    justify-content: center;
  }
  #increase {
    margin-top: 10px;
    padding: 1%;
    border-radius: 2px;
    box-shadow: 1px 1px 5px 1px;
    background-color: ${(pr) => pr.theme.white};
    border: 2px solid ${(pr) => pr.theme.primaryColor};
    &:hover {
      border: 2px solid ${(pr) => pr.theme.secondaryColor};
      color: ${(pr) => pr.theme.secondaryColor};
    }
    span {
      padding: 0.2%;
      background-color: white;
      border: 1px solid ${(pr) => pr.theme.black};
    }
  }
  .form-container {
    width: 85%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px 1px;
  }
  textarea {
    width: 100%;
    height: 5vh;
    line-height: 1.2em;
    box-shadow: 0.5px 0.5px 2.5px 0.5px;
  }
  .btns {
    width: 80%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;

    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 25%;
    padding: 3%;

    margin: auto;
    border: 2px solid ${(pr) => pr.theme.secondaryColor};
  }
  .btn:hover {
    background-color: ${(pr) => pr.theme.teritaryColor};
    color: white;
    box-shadow: 1px 1px 5px 1px black;
  }
`;

export default Post;
