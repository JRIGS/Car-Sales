import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//importing redux provider
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

//importing our createStore & reducer
import { createStore } from 'redux';
import { reducer } from './reducer/reducer.index';
//creating store which calls the reducer
const store = createStore(reducer);

const rootElement = document.getElementById('root');
//applying our Provider to the APP
ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, rootElement);
