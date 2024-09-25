import './App.css'
// import ExpertiesComponent from './components/Experties/ExpertiesComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import HeroComponent from './components/Hero/HeroComponent';
import TimelineComponent from './components/Timeline/TimelineComponent';
// import WIPComponent from './components/WIP/WIPComponent';
// import PortfolioComponent from './components/Portfolio/PortfolioComponent';
import RecipeGeneratorComponent from './components/RecipeGenerator/RecipeGeneratorComponent';
import css from './styles/app.module.scss'
import './styles/global.scss'
import './styles/index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function RedirectToGitHub() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/Machine-Learning-for-Trading-For-Sharing/tree/main";
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className={`bg-primary ${css.container}`}>
        <Routes>
          <Route path="/" element={
            <>
              <HeroComponent />
              {/* <ExpertiesComponent /> */}
              <TimelineComponent />
              {/* <WIPComponent /> */}
              {/* <PortfolioComponent /> */}
            </>
          } />
          <Route path="/recipe-generator" element={<RecipeGeneratorComponent />} />
          <Route path="/ml4t" element={<RedirectToGitHub />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;
