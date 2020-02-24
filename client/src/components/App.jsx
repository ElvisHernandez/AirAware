import React from 'react';
import '../styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About_components/About';
import Solutions from './Solutions_components/Solutions';
import OneCity from './OneCity_components/OneCity';
import Home from './Home_components/Home';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {ApiProvider} from './context/ApiContext'

class App extends React.Component {
  render() {
    return (
      <ApiProvider>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/city/:city" component={OneCity} />
            <Route exact path="/solutions" component={Solutions} />
              <Route exact path="/" component={Home} />          
          </Switch>
          <Footer />
        </BrowserRouter>
      </ApiProvider>  
    );
  }
}

export default App;
