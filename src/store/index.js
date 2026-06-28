import { configureStore } from '@reduxjs/toolkit';

import storageReducer from './reducers/storage';

export const store = configureStore({
    reducer: {
        storage: storageReducer,
    }
})