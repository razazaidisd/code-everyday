import React from 'react';
import Hooks from './hooks';
import FormUsingHooks from './form-using-hooks';
import ComponentHasError from './ComponentHasError';
import './App.css';

import './loader.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>It's React playground</h1>
      </header>
      <div className="App-sidebar">
        sidebar
      </div>
      <section className="App-body">
        <Hooks />
        <FormUsingHooks />
        <ComponentHasError />
      </section>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
