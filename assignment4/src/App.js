import React from 'react';

import Header from "./components/Header.js";
import MainBody from "./components/MainBody";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      {/* <Footer />   */}
    </div>
  );
}

export default App;
