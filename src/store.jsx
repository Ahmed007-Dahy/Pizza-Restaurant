import { combineReducers, configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';
import { persistReducer, persistStore } from 'redux-persist';

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
        getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
