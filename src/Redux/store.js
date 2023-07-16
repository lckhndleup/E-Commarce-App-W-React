import { combineReducers,createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { DrawerReducer } from "./Reducers/Drawer";
import { productsReducer } from "./Reducers/Products";
import { productsDetailReducer } from "./Reducers/ProductDetail";


let initialState =  {

}


const reducers = combineReducers({
    drawer : DrawerReducer ,
    products : productsReducer,
    product : productsDetailReducer,
})


const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))



export default store;