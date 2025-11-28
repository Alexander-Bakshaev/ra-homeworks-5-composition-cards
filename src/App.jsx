import React from 'react';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="cards-container">
        <Card
          image="/image_cap.png"
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          link="#"
        />

        <Card
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
          link="#"
        />
      </div>
    </div>
  );
}

export default App;
