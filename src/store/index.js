import { configureStore } from '@reduxjs/toolkit';

import infraReducer from './infra';

const store = configureStore({
  reducer: infraReducer
});

export default store;
