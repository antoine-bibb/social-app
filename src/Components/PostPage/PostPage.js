import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PostPage = () => {
  const [publicPosts, setPublicPosts] = useState([]);
  const { push } = useHistory();
  const [users, setUsers] = useState([]);
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    fetchPosts();
    fetchNames();
  }, []);

  const fetchPosts = () => {
    axiosWithAuth()
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        setPublicPosts(res.data.reverse());
      })
      .catch((err) => console.log(err));
  };

  const fetchNames = () => {
    axiosWithAuth()
      .get("/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  };

  return (
    <div>
      {publicPosts.map((post, i) => (
        <Main>
          <div className="post-header">
            <h2>Title: {post.title}</h2>
            {users.map((user) => {
              return post.user_id === user.id ? (
                <h3 key={user.id} className="creator">
                  Created By: {user.username}
                </h3>
              ) : null;
            })}
          </div>

          <img
            className="post"
            onClick={() => push(`/post/${post.id}`)}
            key={post.id}
            src={post.img_url}
            alt="oops! no_image"
          />
          <div id="likes" className="like-button">
            <button id="increase" onClick={(e) => setLikes(likes + 1)}>
              <h1>&#128076;</h1>
              <div>likes {likes}</div>
            </button>
          </div>
          <div className="txt">
            <p>{post.body}</p>
          </div>
        </Main>
      ))}
    </div>
  );
};

const Main = styled.div`
  /* border-bottom: 2px solid rgba(5, 5, 5, 0.4);
  border-left: 4px outset rgba(5, 5, 5, 0.4); */
  border-radius: 2px;
  width: 75%;
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
    margin-left: 10px;
  }
  h3 {
    margin-right: 10px;
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
    background-color: ${(pr) => pr.theme.white};
    border: 2px solid ${(pr) => pr.theme.primaryColor};
    &:hover {
      border: 2px solid ${(pr) => pr.theme.secondaryColor};
      box-shadow: 1px 1px 5px 1px;
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
    box-shadow: 1px 1px 5px 1px;
    margin: auto;
    border: 2px solid ${(pr) => pr.theme.secondaryColor};
  }
  .btn:hover {
    background-color: ${(pr) => pr.theme.teritaryColor};
    color: white;
  }
`;

export default PostPage;
