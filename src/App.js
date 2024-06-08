import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name : " + name + "\nEmail-Id : " + email + " ");
  }
  const reveal = () => {
    let p = document.getElementById("password");
    if (p.type === "password") {
      p.type = "text";
    }
    else
      p.type = "password";
    console.log("password: " + p);
  }
  return (
    <div className='container'>
      <img alt="bg-image" src='' />
      <form onSubmit={handleSubmit} className="form">
        <h1>Login Form</h1>
        <input class="ele" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name  ' required />
        <input class="ele" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email-Id  ' required />
        <input class="ele" type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password  ' required />
        <div className='check'>
          <input type="checkbox" name="passowrd" id="pass" onClick={reveal} />
          <span>Forget passowrd</span>
        </div>
        <button type="submit">Submit</button>
      </form >
    </div >
  );
}

export default App;
