import { MyRoutes, Light, Dark } from "./index";

import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/globalStyles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const ThemeContext = createContext(null);
function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyles />
          <MyRoutes />
        </ThemeProvider>
      </ThemeContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
