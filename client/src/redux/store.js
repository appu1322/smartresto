import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';

export default configureStore({
    reducer:{
        foods: foodReducer,
    },
});