import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Mysum from './Mysum';
import Compo from './Compo';

ReactDOM.render(<Compo />, document.getElementById('root'));
registerServiceWorker();

/*ReactDOM.render(<Mysum />, document.getElementById('root'));
registerServiceWorker();*/
