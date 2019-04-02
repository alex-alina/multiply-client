import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import IntroSection from './components/intro/IntroSection';
import ValuePropSection from './components/valueProposition/ValuePropSection';
import SecondSignupSection from './components/secondSignupSection/SecondSignupSection';
import Footer from './components/footer/Footer';
import HowItWorksContainer from './components/howItWorks/HowItWorksContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <IntroSection />
        <ValuePropSection />
        <HowItWorksContainer />
        <SecondSignupSection />
        <Footer />
      </div>
    );
  }
}

export default App;
