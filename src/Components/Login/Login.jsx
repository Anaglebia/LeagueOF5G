import { useSignIn } from '@clerk/clerk-react';
import React, { useState } from 'react';

const Login = () => {
  const { signIn } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signIn.create({
        identifier: email,
        password,
      });
    } catch (err) {
      setError(err.errors[0].message);
    }
  };

<<<<<<< HEAD
  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login
=======

function Login() {

  return (
    <>
      <h1>Login</h1>
    </>
  );
}


export default Login;

>>>>>>> 251916a6b860caab4f8c905977896efa92538fc3
