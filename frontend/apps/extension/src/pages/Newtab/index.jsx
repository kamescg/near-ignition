import React from 'react';
import { render } from 'react-dom';
import * as ServiceWorker from './serviceWorker';
import Newtab from './Newtab';
import '@assets/css/reset.css';
import '@assets/css/App.css';
import './index.css';

render(<Newtab />, window.document.querySelector('#app-container'));

ServiceWorker.register();
