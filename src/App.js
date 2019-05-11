import React from 'react';

import './App.css';
import './app.less'

import Header from './components/common/header'
import Main from './components/main'
import Footer from './components/common/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
