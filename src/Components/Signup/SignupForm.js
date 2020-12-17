import React from "react";
import styled from "styled-components";

function SignupForm(props) {
  const { values, change, submit, errors, disabled } = props;

  return (
    <SignupWrapper>
      <form className="form container" onSubmit={submit}>
        <h1>SIGN UP</h1>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
        </div>
        <div className="inputs">
          <label>
            <div className="label">
              <i class="fas fa-user"></i>Username:
            </div>
            <input
              value={values.username}
              name="username"
              type="text"
              onChange={change}
            />
          </label>

          <label>
            <div className="label">
              <i className="fas fa-lock"></i> Password:
            </div>
            <input
              value={values.password}
              name="password"
              type="password"
              onChange={change}
            />
          </label>

          <label>
            <div className="label">First Name:</div>
            <input
              value={values.first_name}
              name="first_name"
              type="text"
              onChange={change}
            />
          </label>

          <label>
            <div className="label">Last Name:</div>
            <input
              value={values.last_name}
              name="last_name"
              type="text"
              onChange={change}
            />
          </label>

          <label>
            <div className="label">
              <i class="fas fa-envelope"></i> Email:
            </div>
            <input
              value={values.email}
              name="email"
              type="text"
              onChange={change}
            />
          </label>
        </div>

        <div className="submit">
          <button disabled={disabled} className="inner-button">
            Sign up
          </button>
        </div>
      </form>
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Karma", sans-serif;
  }

  form {
    margin: auto;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .label {
    box-sizing: border-box;
    height: auto;
    text-align: left;
    margin: 0 0 0 60px;
    i {
      margin-right: 2px;
    }
  }

  .new-account {
    margin-top: 20px;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.2rem;
    }
  }

  input {
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

export default SignupForm;
