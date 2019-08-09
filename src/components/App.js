import React from 'react';
import Header from './Header';
import Tags from './Tags';
import LoadArticle from './LoadArticle';

import '../style.css';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
          <Header />
          <Tags />
          <LoadArticle />
      </div>
    </div>
  );
}

export default App;
