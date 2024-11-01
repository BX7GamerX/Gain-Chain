import React from 'react';

const Profile = () => {
  const user = { name: 'John Doe', principalId: 'abcd1234' };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-deepBlack">
      <h1 className="text-2xl font-bold mb-4 text-gold">Profile</h1>
      <div className="bg-charcoalGray p-4 rounded shadow-md w-80 text-center">
        <h2 className="text-lg font-semibold text-ivoryWhite">{user.name}</h2>
        <p className="text-silver">Principal ID: {user.principalId}</p>
      </div>
    </div>
  );
};

export default Profile;
