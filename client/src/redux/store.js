import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENCION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

const persistor = persistStore(store);

export { store, persistor };

// export default store;
