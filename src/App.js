import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import VideoForm from "./components/videos/VideoForm";
import VideoList from "./components/videos/VideoList";
import { ToastContainer } from "react-toastify";



const App = () => {

    const [hiddenNavbar, setHiddenNavbar] = useState(true);

  return (
    <BrowserRouter>
      <Navbar hiddenNavbar={hiddenNavbar}/>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} setHiddenNavbar={setHiddenNavbar}/>} />
          <Route path="/register" render={(props) => <Register {...props} setHiddenNavbar={setHiddenNavbar}/>} />
          <Route path="/home" render={(props) => <VideoList {...props} setHiddenNavbar={setHiddenNavbar}/>} />
          <Route path="/new-video" render={(props) =>  <VideoForm {...props} setHiddenNavbar={setHiddenNavbar}/>}/>
          <Route path="/update/:id" render={(props) =>  <VideoForm {...props} setHiddenNavbar={setHiddenNavbar}/>} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
