import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react';
import { HomePage } from '../Features/HomePage/HomePage';

function App() {

  const [fixedMenu, setfixedMenu] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);
  
  return (
    <Segment inverted style={{ minHeight: 800 }} textAlign="center" >
      <HomePage/>
    </Segment>
  );
}

export default App;
