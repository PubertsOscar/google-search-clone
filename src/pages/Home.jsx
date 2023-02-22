import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="" className="home__headerLeft--link">About</Link>
          <Link to="" className="home__headerLeft--link">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="" className="home__headerRight--link">Gmail</Link>
          <Link to="" className="home__headerRight--link">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        <div className="home__inputContainer">
            <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;
