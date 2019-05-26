import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

/* avoid console errors */
const divId = 'main-app';
const div = document.createElement('div');
div.id = divId;
document.body.appendChild(div);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById(divId));
});
