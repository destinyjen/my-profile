import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

// import './App.css';

// Main component
const App = () => {
  return (
    <div className="App">
      {{Header}}
      <main>
        <Main />
      </main>
      {{Footer}}
    </div>
  );
}
export default App;  // Ensure to export the component
