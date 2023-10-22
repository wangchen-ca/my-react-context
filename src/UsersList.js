import React, { useContext } from 'react';
import { UsersContext } from './UsersContext';
import { ThemeContext } from './ThemeContext';

export default function UsersList() {
  const { users, fetchUsers } = useContext(UsersContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define the CSS styles based on the theme
  const containerStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
  };

  const titleStyle = {
    color: theme === "light" ? "black" : "white",
  };

  return (
    <>
      <div id="users-list-container" style={containerStyle}>
        <h2>Users List</h2>
        <ul id="users-list">
          {users.map((user, index) => (
            <li key={index}>
              <h3 style={titleStyle}>{user.name}</h3>
              <img src={user.imgSrc} alt={user.name} width={150} height={50} />
            </li>
          ))}
        </ul>
      </div>
      <button id="fetch-users" onClick={fetchUsers}>Fetch Users</button>
      <label>
          <input type="checkbox" checked={theme === 'light'} onChange={e =>{ toggleTheme(); }} />
          Is light Theme 
      </label>
    </>
  );
};

