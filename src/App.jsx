import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

import './App.css';

// Main component
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
export default App;  // Ensure to export the component
