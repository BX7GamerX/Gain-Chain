import React, { useState } from 'react';

const Login = () => {
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    if (window?.ic) {
      const identity = await window.ic.requestIdentity();
      const user = identity.getPrincipal().toString();
      setMessage(`Welcome, ${user}!`);
    } else {
      setMessage('Failed to login. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-deepBlack">
      <div className="bg-charcoalGray p-6 rounded shadow-md w-80">
        <h2 className="text-gold font-bold mb-4 text-center">Login to Gain Chain</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-gold text-deepBlack p-2 rounded hover:bg-goldenYellow transition"
        >
          Login with Internet Identity
        </button>
        {message && <p className="mt-2 text-ivoryWhite text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
