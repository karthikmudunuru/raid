import { createSlice } from '@reduxjs/toolkit';

const initialInfraState = { };

const infraSlice = createSlice({
  name: 'infra',
  initialState: initialInfraState,
  reducers: {
   setConfig(state, action) {
    return {...state,...action.payload};
    }
  },
});

export const infraActions = infraSlice.actions;

export default infraSlice.reducer;