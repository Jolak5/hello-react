import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './message';

export default configureStore({ reducer: messageReducer });
