import { App } from "./App.js";
import { ThemeContextProvider, THEME_DARK } from "./context/theme.context.js";
import { useState } from "react";

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <App />
    </ThemeContextProvider>
  );
}

