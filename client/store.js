import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import routeReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const state = {
    posts,
    comments
}

const store = createStore(routeReducer, state);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;