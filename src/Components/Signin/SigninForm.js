import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SignInForm(props) {
  const { change, values, submit } = props;

  return (
    <SigninWrapper>
      <form className="form container" onSubmit={submit}>
        <h1>LOG IN</h1>
        <div className="inputs">
          <label>
            <div className="label">
              <i class="fas fa-user"></i>Username:
            </div>
            <input
              value={values.username}
              placeholder="Username"
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
              placeholder={"Password"}
              name="password"
              type="password"
              onChange={change}
            />
          </label>
        </div>
        <div className="submit">
          <button className={"inner-button "} type="submit">
            <Link className="signin" to="/">
              Sign In
            </Link>
          </button>
        </div>

        <div className="new-account">
          <p>Not registered yet?</p>
          <Link className="register" to="/signup">
            Register Here
          </Link>
        </div>
      </form>
    </SigninWrapper>
  );
}

const SigninWrapper = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-family: "Karma", sans-serif;
  }

  form {
    margin: auto;
    margin-top: 50px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .label {
    text-align: left;
    margin: 0 0 0 70px;

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
