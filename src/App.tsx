import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseIDExample from './components/UseIDExample';
import ParentComponent from './components/ParentComponent';
import LayoutEffectExample from './components/LayoutEffectExample';

function App() {
  return (
    <div className="App">
      <UseIDExample />
      <ParentComponent />
      <LayoutEffectExample message="Its layout effect hook" />
    </div>
  );
}

export default App;
