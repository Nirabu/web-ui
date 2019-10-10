import {createStore, applyMiddleware} from 'redux';
import reducers from "./reducers/index";
import thunk from 'redux-thunk';

/* Create the store, only one reducer function,
*  the first time the reducer is called, value will be undefined.
*  The reducer needs to handle this case by having default state value.
*  It needs to look at the previous state and the dispatched action, and
*  determine what kind of work needs to be done.
*  If changes need to occur, it needs to create new objects and arrays with the updated data
*  and return those.
*  If no changes are needed, it should return the existing state as-is.
*/

const store = createStore(reducers, applyMiddleware(thunk));

// export function configureStore(initialState = {}) {
//     const store = createStore(reducers, initialState);
//     return store;
// }
// export const store = configureStore();


console.log(store.getState());


export default store;