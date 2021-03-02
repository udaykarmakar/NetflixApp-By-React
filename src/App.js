import React from 'react';
import './App.css';
import Card from './Card';
import Sdata from './Sdata';


function ncard(value){
    return(
        <Card 
            imgSrc = {value.imgSrc}
            title = {value.title}
            link = {value.link}
        />
    );
}

function App() {
  return (
    <>
      <h1 className='heading_style'> A Collection of Netflix Original Series</h1>
      {Sdata.map(ncard)}
      <p> Uday Karmakar &copy;</p>
    </>
  );
}

export default App;
