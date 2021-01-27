import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

import { HashRouter } from 'react-router-dom'
import './root.scss'

const Root = () => {
  return (
    <HashRouter>
      <>
        <Header/>
        <Main />
        <Footer />
      </>
    </HashRouter>
  )
};

export default Root