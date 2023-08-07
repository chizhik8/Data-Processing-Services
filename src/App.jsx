import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Questions from './pages/Questions';
import Benefits from './pages/Benefits';


function App() {
  
  const urlData = 'https://data-processing-services-default-rtdb.europe-west1.firebasedatabase.app/data.json';
  
  useEffect(() => { 
    fetch(urlData)
      .then(response => { return response.json(); })
      .then(data => { console.log(data); });
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/Data-Processing-Services" exact><Home /></Route>
        <Route path="/Data-Processing-Services/about"><About /></Route>
        <Route path="/Data-Processing-Services/gallery"><Gallery /></Route>
        <Route path="/Data-Processing-Services/pricing"><Pricing /></Route>
        <Route path="/Data-Processing-Services/questions"><Questions /></Route>
        <Route path="/Data-Processing-Services/benefits"><Benefits /></Route>
      </Switch>
    </div>
  );

}

export default App;
