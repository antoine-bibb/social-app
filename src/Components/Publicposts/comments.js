import React from "react";
import styled from "styled-components";
export default function CommentForm(props) {
  const { change, values, submit } = props;

  return (
    <Comments>
      <form className="comment-container" onSubmit={submit}>
        <div className="inputs">
          <div>
            <h3 className="label">Comments:</h3>
          </div>
          <label>
            <input
              value={values}
              placeholder="Type Comments Here!"
              name="Comments"
              type="text"
              onChange={change}
            />
          </label>
          <div className="cmnt-btns">
            <button className="post btn">submit</button>
          </div>
        </div>
      </form>
    </Comments>
  );
}

const Comments = styled.div`
  .comment-container {
    display: flex;
    border: 2px solid ${(pr) => pr.theme.black};
    background-color: ${(pr) => pr.theme.white};
    border-radius: 5px;
  }
  .inputs {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h3 {
    width: 35%;
    display: flex;
    align-items: center;
  }

  .cmnt-btns {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 0;
  }
  input {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 20px;
    outline: 0;
    transition: all 0.9s;
    border-radius: 2%;
    background-color: ${(pr) => pr.theme.prime};
    padding: 15px;
    border: 1px solid black;

    :focus {
      background-color: ${(pr) => pr.theme.white};
      border-bottom: 1px solid black;
    }
  }
`;
