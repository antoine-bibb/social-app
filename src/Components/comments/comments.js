import React from "react";
import styled from "styled-components";

function Comments(props) {
  const { change, submit, disabled } = props;

  return (
    <>
      <form className="form container" onSubmit={submit}>
        <textarea
          placeholder="type comments here"
          value=""
          name="comments"
          type="text"
          onChange={change}
        />
        <div className="submit">
          <button disabled={disabled} className="inner-button">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Comments;
