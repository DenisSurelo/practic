import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/taskSlice";
import { filtersReducer } from "./filtersSlice";
import {authReducer} from './auth/authSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
