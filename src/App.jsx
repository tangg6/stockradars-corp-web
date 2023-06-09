import "./App.css";
import NavigatorTab from "./navigator/NavigatorTab";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import RegisterPage from "./screens/RegisterPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme.js"; 

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavigatorTab />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}
