import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseIDExample from './components/UseIDExample';
import ParentComponent from './components/ParentComponent';
import LayoutEffectExample from './components/LayoutEffectExample';
import TrasitionHook from './components/TrasitionHook';
import StateBatching from './components/StateBatching';

function App() {
  return (
    <div className="App">
      <UseIDExample />
      <ParentComponent />
      <LayoutEffectExample message="Its layout effect hook" />
      <hr />
      <TrasitionHook />
      <hr />
      <StateBatching />
    </div>
  );
}

export default App;
