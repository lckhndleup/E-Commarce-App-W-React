import { combineReducers,createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { DrawerReducer } from "./Reducers/Drawer";
import { productsReducer } from "./Reducers/Products";
import { productsDetailReducer } from "./Reducers/ProductDetail";
import { cardReducer } from "./Reducers/Card";
import { searchReducer } from "./Reducers/Search";




const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []
let initialState = {
  card: {cardItems}
}




const reducers = combineReducers({
    drawer: DrawerReducer,
    products: productsReducer,
    product: productsDetailReducer,
    card: cardReducer,
    search: searchReducer ,

  });
  


const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)))



export default store;