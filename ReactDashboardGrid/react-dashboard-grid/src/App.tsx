import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Overview from './components/Overview';
import Body from './components/Body';
import Detail from './components/Detail';

function App() {
  return (
    <body className="container">
      <Header />
      <Overview />
      <Body />
      <Detail />
    </body>
  );
}

export default App;
