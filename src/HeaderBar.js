import React, { useEffect, useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export default function HeaderBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define the CSS styles based on the theme
  const headerBarStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
  };

  return (
    <>
      <h1 style={headerBarStyle}>Header Bar</h1>
      <div>
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={(e) => {
            toggleTheme();
          }}
        />
        Is light Theme
      </div>
    </>
  );
}
