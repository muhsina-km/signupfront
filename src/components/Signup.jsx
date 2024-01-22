import React, { useEffect, useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const handleSignUp = () => {
    // Add your sign-up logic here
    // You can send the user data to a server for authentication and user creation

    // For this example, let's just log the user data to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Address:', address);
    console.log('Number:', number);

    // Clear the form after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setAddress('');
  };

  useEffect(() => {
    axios.get("http://localhost:3005/signup/")
        .then(response => {
            console.log(response.data)
            setPlantdetailsview(response.data)
        })
        .catch(err => console.log(err))
},[])

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
<br></br>
<label htmlFor="Address">Address:</label>
        <textarea
          type="address"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

<br></br>
<label htmlFor="number">PH.Number:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />


        <br></br>
        
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default  Signup;
