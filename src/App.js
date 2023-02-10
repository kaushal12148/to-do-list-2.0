import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { auth } from "./firebase";
import Todo from "./Todo/Todo";

export default function App() {

  const [username, setUsername] = useState("");
  useEffect(() => {               //sending and recieving the email front part and sending it to the Todo app
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.email.substr(0, user.email.indexOf("@")));
      } else setUsername("");
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Here we send the username to Todo by prop drilling */}
          <Route path="/todo" element={<Todo name={username} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
