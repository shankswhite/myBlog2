import './App.css'
// import ExpertiesComponent from './components/Experties/ExpertiesComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import HeroComponent from './components/Hero/HeroComponent';
import TimelineComponent from './components/Timeline/TimelineComponent';
// import WIPComponent from './components/WIP/WIPComponent';
// import PortfolioComponent from './components/Portfolio/PortfolioComponent';
import RecipeGeneratorComponent from './components/RecipeGenerator/RecipeGeneratorComponent';
import PathFindingComponent from './components/PathFinding/PathFindingComponent';
import css from './styles/app.module.scss'
import './styles/global.scss'
import './styles/index.css'
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import YOLOKANComponent from './components/YOLO-KAN/YOLOKANComponent';
import { DynamicComponent } from './components/CG/DynamicComponent';
import CG from './components/CG/CG';
import Morphing from './components/CG/Morphing';
// import CGSlideshow from './components/CG/CGSlideshow';
function RedirectToYolo() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/YOLOwithKAN";
  }, []);

  return null;
}

function RedirectToml4t() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/Machine-Learning-for-Trading-For-Sharing/tree/main";
  }, []);

  return null;
}

function RedirectToQA() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/CS6300-Group-Project";
  }, []);

  return null;
}

function RedirectToOS() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/gios";
  }, []);

  return null;
}

function RedirectToUnity() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/CS6457---GDD";
  }, []);

  return null;
}

function RedirectToCGame() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/CS5008GroupProject";
  }, []);

  return null;
}

function RedirectToRecipe() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/OnKitchen-Back-End";
  }, []);

  return null;
}

function RedirectToMahjong() {
  React.useEffect(() => {
    window.location.href = "https://github.com/shankswhite/MahjongCalculator";
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
          <Route path="/yolo-kan" element={<YOLOKANComponent />} />
          <Route path="/cg" element={
            <Suspense fallback={<div>Loading...</div>}>
              <CG />
            </Suspense>
          } />
          <Route path="/cg/:id" element={<DynamicComponent />} />
          <Route path="/cg/morphing" element={<Morphing />} />
          <Route path="/chatbot" element={<RecipeGeneratorComponent />} />
          <Route path="/ml4t" element={<RedirectToml4t />} />
          <Route path="/qa" element={<RedirectToQA />} />
          <Route path="/os" element={<RedirectToOS />} />
          <Route path="/unity" element={<RedirectToUnity />} />
          <Route path="/cgame" element={<RedirectToCGame />} />
          <Route path="/recipe" element={<RedirectToRecipe />} />
          <Route path="/mahjong" element={<RedirectToMahjong />} />
          <Route path="/yolo" element={<RedirectToYolo />} />
          <Route path="/pathfinding" element={<PathFindingComponent />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
