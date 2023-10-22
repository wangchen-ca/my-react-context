import React from 'react';
import { UsersProvider } from './UsersContext';
import { ThemeProvider } from './ThemeContext';
import HeaderBar from './HeaderBar';
import UsersList from './UsersList';

function App() {
  return (
    <ThemeProvider>
      <UsersProvider>
        <div className="App">
          <h1>Context Demo</h1>
          <HeaderBar />
          <UsersList />
        </div>
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
