import { creatStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'react-devtools-extension';

const store = creatStore(rootReducer, composeWithDevTools());

export default store;