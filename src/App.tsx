import React from 'react';
import AppHeader from './components/Header';
import HumanList from './components/human-list/HumanListComponent';

function App() {
  return (
    <div className="containerfluid">
      <AppHeader/>
      <div className="container">
        <HumanList/>
      </div>
    </div>
  );
}

export default App;
