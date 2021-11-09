import React from 'react'
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header'
import Signos from './components/Signos'

function App() {
  return (
    <div className="App">
      <Header />
      <Signos />
      <Footer />
    </div>
  );
}

export default App;
