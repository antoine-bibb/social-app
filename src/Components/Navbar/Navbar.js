import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/LogoMakr-1omAAj.png";
const Navbar = () => {
  const welcomeMsg = localStorage.getItem("message");

  const { go } = useHistory();

  return (
    <NavContainer>
      <div className="logo-img">
        <NavLink to="/homepage">
          <img className="logo" src={img} alt="deepshot camera img"></img>
        </NavLink>
      </div>

      <div className="nav">
        {!localStorage.getItem("token") ? (
          <NavLink className="link" activeClassName="active" to="/login">
            Login
          </NavLink>
        ) : (
          <Link
            className="logout"
            to="/"
            onClick={() => {
              localStorage.clear();
              go(0);
            }}
          >
            Logout
          </Link>
        )}
        {!localStorage.getItem("token") ? (
          <NavLink className="link" activeClassName="active" to="/signup">
            SignUp
          </NavLink>
        ) : null}

        <NavLink to="/homepage">Home</NavLink>
        <NavLink className="link" to="/myposts">
          My Posts{" "}
        </NavLink>
        <NavLink to="/chat">Messages</NavLink>
      </div>
      <h2>{welcomeMsg}</h2>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  background-color: ${(pr) => pr.theme.prime};
  margin: auto;
  margin-top: 0;
  border-bottom: 5px solid ${(pr) => pr.theme.secondaryColor};
  box-shadow: 1px 1px 7.5px 1px black;

  position: fixed;
  z-index: 99;

  .logo-img {
    width: 25%;
    display: flex;
    align-items: center;
    margin-top: 0.5%;
    margin: auto;
    margin-left: 15px;
  }
  .logo {
    display: flex;
    box-shadow: none;
    width: 85%;
  }

  .nav {
    display: flex;
    flex-flow: row;
    width: 75%;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    a {
      display: flex;
      font-size: 1.4rem;
      font-weight: 700;
      align-items: center;
      text-align: center;
      width: 40%;
      padding: 0px 25px;
      color: black;
      text-decoration: none;
      margin: 20px;
      &:hover {
        background-color: ${(pr) => pr.theme.primaryColor};
        border: 1px solid ${(pr) => pr.theme.secondaryColor};
        color: ${(pr) => pr.theme.prime};
        box-shadow: 1px 1px 7.5px 1px black;
        transform: scale(1.5);
        transition: 500ms ease-in-out;
      }
    }

    a.active {
      color: gray;
      background: lightgray;
    }
  }
  .logout {
    color: red;
  }
  h2 {
    margin-top: 2.5%;
    margin-right: 10%;
    letter-spacing: 2px;
  }
`;

export default Navbar;
