import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Overview from './components/Overview';
import Body from './components/Body';

function App() {
  return (
    <body className="container">
      <Header />
      <Overview />
      <Body />
    </body>
  );
}

export default App;
