import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import IntroSection from './components/intro/IntroSection';
import ValuePropSection from './components/valueProposition/ValuePropSection';
// import HowItWorks from './components/howItWorks/HowItWorks';
// import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <IntroSection />
        <ValuePropSection />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
