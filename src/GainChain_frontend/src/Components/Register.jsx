import React, { useState } from 'react';

const Register = () => {
  const [identity, setIdentity] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(`Registration successful for ${identity}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-deepBlack">
      <div className="bg-charcoalGray p-6 rounded shadow-md w-80">
        <h2 className="text-gold font-bold mb-4 text-center">Register for Gain Chain</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter your identity"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
            className="w-full p-2 border border-silver rounded mb-4 bg-charcoalGray text-ivoryWhite"
          />
          <button
            type="submit"
            className="w-full bg-gold text-deepBlack p-2 rounded hover:bg-goldenYellow transition"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-2 text-ivoryWhite text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
