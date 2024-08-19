// App Component: This will be the main component that holds all the other components.

// App.js
import React from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
// Header.js
import React from 'react';