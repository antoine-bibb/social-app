import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    const currentId = localStorage.getItem("userId");
    axiosWithAuth()
      .get(`/api/users/${currentId}/posts`)
      .then((res) => {
        setMyPosts(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Button onClick={() => push("/newpost")}>+</Button>
      {myPosts.map((post) => {
        return (
          <Styles
            className="main-post"
            key={post.id}
            onClick={() => push(`/mypost/${post.id}`)}
          >
            <h2> {post.title}</h2>
            <img src={post.img_url} alt={post.title} className="post" />
            <h3>{post.body}</h3>
          </Styles>
        );
      })}
    </div>
  );
};
const Button = styled.button`
  margin-top: 40px;
  color: ${(pr) => pr.theme.primaryColor};
  font-size: 4rem;

  &:hover {
    color: ${(pr) => pr.theme.secondaryColor};
    box-shadow: 2px 4px 10px 2px black;
    transform: scale(1.2);
  }
`;

const Styles = styled.div`
  border-radius: 2px;
  width: 65%;
  margin: 5% auto;
  padding: 8% 0;
  background-color: ${(pr) => pr.theme.prime};
  border: 1px solid ${(pr) => pr.theme.secondaryColor};
  color: ${(pr) => pr.theme.secondaryColor};
  text-shadow: 1px 1px black;
  font-size: 1.2rem;
  &:hover {
    box-shadow: 2px 4px 10px 2px black;
  }
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 20px;
  }
`;

export default MyPosts;
