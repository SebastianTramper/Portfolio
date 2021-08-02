import React from 'react';
import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Timeline from './components/pages/Timeline';
import { AnimatePresence } from 'framer-motion';

import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div>

      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About />} />
          <Route path="/work" render={() => <Work />} />
          <Route path="/timeline" render={() => <Timeline />} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
