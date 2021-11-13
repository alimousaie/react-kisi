import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducer, composedEnhancer)

export default store;


