import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



function App() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registered = {
      fullName: fullName,
      username: username,
      email: email,
      password: password,
    };
    // Post registered to backend
    axios.post("http://localhost:4000/app/signup", registered).then(response=> console.log(response.data));
    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
    
  };

  return (
 
      <div className="container">
          <h2 className="text-white text-center" >REACT VALIDATION FORM  </h2>
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <br />
            
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              className="form-control"
              required
             
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="form-control"
              required
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              required
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              required
            />{" "}
            <br />
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="Submit"
            />
          </form>
        </div>
      </div>
      
   
  );
}

export default App;
