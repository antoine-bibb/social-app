import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "./validation/newPostFormSchema";
import { useHistory } from "react-router-dom";

const NewPost = () => {
  const userId = localStorage.getItem("userId");

  const { push } = useHistory();

  const initialPostValues = {
    user_id: parseInt(userId),
    title: "",
    img_url: "",
    body: "",
  };
  const initialPostFormErrors = {
    img_url: "",
    title: "",
  };
  const initialDisabled = true;

  const [postValues, setPostValues] = useState(initialPostValues);
  const [postFormErrors, setPostFormErrors] = useState(initialPostFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setPostFormErrors(initialPostFormErrors);
      })
      .catch((err) => {
        setPostFormErrors({
          ...postFormErrors,
          [e.target.name]: err.errors[0],
        });
      });

    setPostValues({
      ...postValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/posts", postValues)
      .then((res) => {
        push("/myposts");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    schema.isValid(postValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [postValues]);

  return (
    <div className="form-spacer">
      <div className="form-holder">
        <form className="edit-box" onSubmit={submitForm}>
          <div className="edit-form">
            <h2>Create a new Post</h2>
            <div className="errors">
              <div>{postFormErrors.img_url}</div>
              <div>{postFormErrors.title}</div>
            </div>

            <label className="new-post-label">
              Image:
              <input
                className="new-post-field"
                value={postValues.image}
                name="img_url"
                type="text"
                onChange={inputChange}
                required
              />
            </label>

            <label className="new-post-label">
              Title:
              <input
                className="new-post-field"
                value={postValues.title}
                name="title"
                type="text"
                onChange={inputChange}
              />
            </label>
            <label className="new-post-label">
              Story:
              <input
                className="new-post-field"
                value={postValues.body}
                name="body"
                type="text"
                onChange={inputChange}
              />
            </label>

            <div className="submit">
              <button className="button-change new-post-button" disabled={disabled}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
