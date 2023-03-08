import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./redux/product/productReducer";



const rootReducer=combineReducers({
    productState:productReducer,
})
const initialState={}

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const middleware=[thunk]

const store=createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

export default store;