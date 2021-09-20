
import React, { useEffect, useState } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';



function App() {
  const apiKey='13fcd372ebe06fe9ec6291eb6b3b6522'
  const [dataWeather,setDataWeather]=useState();
  const fetchApi=(location)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location||"hanoi"}&appid=${apiKey}`)
    .then(res=>res.json())
    .then(res=>{setDataWeather(res)})
  }
  useEffect(()=>{
      fetchApi('hanoi');
  },[])
  const handleLocation=(newLocation)=>{
    fetchApi(newLocation)
  } 
  return (
    <main>
      <Switch>
        <Route path="/" exact >
          <Home dataWeather={dataWeather}  changLocation={handleLocation}/>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
