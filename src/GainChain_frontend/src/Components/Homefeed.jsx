import React from 'react';

const HomeFeed = () => {
  const posts = [
    { id: 1, user: 'User1', content: 'This is my first post!' },
    { id: 2, user: 'User2', content: 'Hello, Gain Chain!' },
  ];

  return (
    <div className="p-4 bg-richBlack">
      <h1 className="text-2xl font-bold mb-4 text-gold">Home Feed</h1>
      {posts.map(post => (
        <div key={post.id} className="bg-charcoalGray p-4 mb-4 rounded shadow">
          <h2 className="font-semibold text-ivoryWhite">{post.user}</h2>
          <p className="text-silver">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;
