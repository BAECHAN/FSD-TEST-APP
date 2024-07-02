import { LoginPage } from '@/pages/login';
import { MainPage } from '@/pages/main';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@/app/index.css';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </Router>
  );
};

// React 18 createRoot 사용
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>,
  );
}

export default App;
