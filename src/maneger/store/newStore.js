import { applyMiddleware, compose, createStore } from "redux";
import { newsReducer } from "../reducers/newReducer";
import thunk from "redux-thunk";

const configureStore = () => {
    const mystore = createStore(newsReducer,
        compose(applyMiddleware(thunk)));
    return mystore;
}

export default configureStore;