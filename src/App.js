import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from './data';


function App() {
  const cards = data.map(item => {
    return (
      <Card
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className='cards-list'>
        {cards}
      </div>
      <Footer />
    </div>
  );
}

export default App;
