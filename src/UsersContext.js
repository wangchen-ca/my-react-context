import React, { createContext, useContext, useState } from 'react';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: 'UserName 1', imgSrc: 'https://example.com/photo1.jpg' },
    { name: 'UserName 2', imgSrc: 'https://example.com/photo2.jpg' },
    { name: 'UserName 3', imgSrc: 'https://example.com/photo3.jpg' },
  ]);

  const fetchUsers = async () => {
    // Check if users have already been fetched
    if (users.length === 3) {
      // Simulate fetching new users (replace with your actual data fetching logic)
      const newUsers = [
        { name: 'UserName 4', imgSrc: 'https://example.com/newphoto4.jpg' },
        { name: 'UserName 5', imgSrc: 'https://example.com/newphoto5.jpg' },
      ];

      setUsers([...users, ...newUsers]);
    }
  };

  return (
    <UsersContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

