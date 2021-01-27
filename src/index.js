import ReactDom from 'react-dom';
import React from 'react';

import Root from './components/root/root';

const rootElement = document.querySelector('#root');

ReactDom.render(<Root/>, rootElement);