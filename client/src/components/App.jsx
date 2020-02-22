import React from 'react';
import '../styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Solutions from './Solutions';
import OneCity from './OneCity';
import Home from './Home';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/city/:city" component={OneCity} />
          <Route exact path="/solutions" component={Solutions} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
