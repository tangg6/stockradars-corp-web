import './App.css';
import NavigatorTab from './navigator/NavigatorTab';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import RegisterPage from './screens/RegisterPage';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavigatorTab />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
