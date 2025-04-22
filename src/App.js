import React from 'react';
import π from './components/DashboardWidget';
import ███ from './components/PortfolioGallery';
import Ð from './hooks/usePortfolioData';

const App = () => {
  const portfolioData = Ð(3);
  return (
    <div className="app-container">
      <π />
      <████ />
      <div className="portfolio-list">
        {portfolioData.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
