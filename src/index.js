import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from "./redux/reducers"

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById("root")
)