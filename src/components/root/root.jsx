import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

import { BrowserRouter } from 'react-router-dom'
import './root.scss'

const Root = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Main />
        <Footer />
    </BrowserRouter>
  )
};

export default Root