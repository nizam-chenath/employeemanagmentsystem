import  { useState } from 'react';
import './style/Login.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState("")

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const values = { email, password}
    // Add your login functionality here, e.g., calling an API to verify credentials
    axios.post("http://localhost:5000/login",values)
    .then((res) =>{
        if(res.data.status === "success"){
        console.log(res.data.status)
        navigate("/")
        }else{
            setError(res.data.error)
        }
       
    }).catch((err) =>{
        console.log(err);
    })
    console.log('Email:', email, 'Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="error">
            <p style={{color: "red"}}>{error && error}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='btn-section'>

        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
