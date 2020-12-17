import React, { useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function EditPost(props) {
  const { postValues, postId, setPost, post } = props;
  const { push } = useHistory();

  const initialFormValues = {
    title: postValues.title,
    body: postValues.body,
    img_url: postValues.img_url,
  };

  const [formValues, setformValues] = useState(initialFormValues);

  const change = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/posts/${postId}`, formValues)
      .then((res) => {
        setPost({
          ...post,
          img_url: res.data.img_url,
          title: res.data.title,
          body: res.data.body,
        });
        push("/myposts");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submit} className="edit-box">
      Edit Post
      <div className="edit-form">
        <label className="form-label">
          Image:
          <input
            className="form-field"
            value={formValues.img_url}
            placeholder="img_url"
            name="img_url"
            type="text"
            onChange={change}
          />
        </label>
        <label className="form-label">
          Title:
          <input
            className="form-field"
            value={formValues.title}
            placeholder="title"
            name="title"
            type="text"
            onChange={change}
          />
        </label>
        <label className="form-label">
          Body:
          <input
            className="form-field"
            value={formValues.body}
            placeholder="body"
            name="body"
            type="text"
            onChange={change}
          />
        </label>
      </div>
      <button className="button-change edit-button">Save Changes</button>
    </form>
  );
}
