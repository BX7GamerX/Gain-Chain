import React, { useState } from 'react';
import logo from './logo2.svg';

const App = () => {
  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState('');

  const handleLogin = async () => {
    if (window?.ic) {
      const identity = await window.ic.requestIdentity();
      const userIdentity = identity.getPrincipal().toString();
      setUser(userIdentity);
      setGreeting(`Welcome, ${userIdentity}!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value; // Accessing form input directly
    setGreeting(`Hello, ${name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    setGreeting('');
  };

  return (
    <main className="flex flex-col items-center bg-deepBlack min-h-screen">
      <img src={logo} alt="Gain Chain logo" className="mb-6" />
      <br />
      <br />
      {user ? (
        <>
          <h2 className="text-lg text-gold">{greeting}</h2>
          <button
            onClick={handleLogout}
            className="bg-gold text-deepBlack p-2 rounded hover:bg-goldenYellow transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="bg-gold text-deepBlack p-2 rounded hover:bg-goldenYellow transition"
          >
            Login with Internet Identity
          </button>
          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="name" className="text-ivoryWhite">
              Enter your name:&nbsp;
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-silver rounded p-2 bg-charcoalGray text-ivoryWhite"
            />
            <button
              type="submit"
              className="bg-gold text-deepBlack p-2 rounded hover:bg-goldenYellow transition"
            >
              Click Me!
            </button>
          </form>
        </>
      )}
      <section id="greeting" className="mt-4 text-ivoryWhite">{greeting}</section>
    </main>
  );
};

export default App;
