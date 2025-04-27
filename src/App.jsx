import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    const section = location.pathname.replace(/^\//, '');
    
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;