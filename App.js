import React from "react";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import NewPost from "./Components/NewPost/NewPost";
import PostPage from "./Components/PostPage/PostPage";
import MyPosts from "./Components/MyPosts/MyPosts";
import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import MyPost from "../src/Components/MyPosts/MyPost";
import Navbar from "./Components/Navbar/Navbar";
import Post from "./Components/Publicposts/Post";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="ghost"></div>
      <Switch>
        {localStorage.getItem("token") ? (
          <PrivateRoute exact path="/" component={PostPage} />
        ) : (
          <Route exact path="/login" component={Signin} />
        )}
        <Route path="/signup" component={Signup} />
        <Route path="/newpost" component={NewPost} />
        <PrivateRoute path="/homepage" component={PostPage} />
        <PrivateRoute path="/myposts" component={MyPosts} />
        <Route path="/mypost/:id" component={MyPost} />
        <PrivateRoute path="/" exact component={Join} />
        <PrivateRoute path="/chat" component={Chat} />

        <Route path="/post/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
