import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware  } from 'redux'
import contacts from './reducers/contactsReducer';
import App from './component/app';
import DevTools from './devtools/devTools';
import createLogger from 'redux-logger';

const logger = createLogger();
const enhancer = compose(applyMiddleware(logger), DevTools.instrument());
const initialState = { contacts: [] }
const store = createStore(contacts, initialState, enhancer);

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