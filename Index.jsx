import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose  } from 'redux'
import contacts from './reducers/contactsReducer';
import App from './app';
import DevTools from './devTools';

const enhancer = compose(
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

let store = createStore(contacts, [], enhancer);

const renderApp = () => {
    render(<Provider store={store}>
        <div>
            <App/>
            <DevTools />
        </div>
    </Provider>, document.getElementById('content'));
};

store.subscribe(renderApp);
renderApp();