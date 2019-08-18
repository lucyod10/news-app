import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import '../style.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Header />
          <Body />
          <Footer />
      </div>
    </div>
  );
}

export default App;
