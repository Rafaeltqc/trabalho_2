import React from 'react';
import { BrowserRouter as Router, Route, Routes } from '
import HomePage from './pages/home.page';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
};
export default App;
