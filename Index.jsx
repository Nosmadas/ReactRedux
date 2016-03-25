import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import contact from './reducers/contactReducer';
import App from './app';

let store = createStore(contact);

render(<Provider store={store}>
       <App/>
       </Provider>,
         
document.getElementById('content'));