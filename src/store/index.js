import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../containers/reducers';
import rootSaga from '../containers/sagas';
import logger from '../middleware/logger';

// let history;

// if (typeof document !== 'undefined') {
//     const createBrowserHistory = require('history/createBrowserHistory')
//         .default;

//     history = createBrowserHistory();
// }

const sagaMiddleware = createSagaMiddleWare();
// const routeMiddleware = routerMiddleware(history);
const middlewares = [
    logger,
    sagaMiddleware,
    // routeMiddleware
];

const appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(rootReducer, compose(appliedMiddlewares));

sagaMiddleware.run(rootSaga);

export {
    store,
    // history
};
