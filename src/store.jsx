import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import userReducer from './Features/User/userSlice';
import cartReducer from './Features/Cart/cartSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

const rootPersistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export const persistor = persistStore(store);
export default store;
