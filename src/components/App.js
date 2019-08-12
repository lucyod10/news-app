import React from 'react';
import Header from './Header';
import Body from './Body';

import '../style.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Header />
          <Body />
      </div>
    </div>
  );
}

export default App;
