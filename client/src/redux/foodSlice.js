import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'foods',
  initialState: { table: parseInt(localStorage.getItem("table")), item: [] },
  reducers: {
    changeTable: (state, action) => (
      { ...state, table: parseInt(action.payload) }
    ),
    add: (state, action) => (
      { ...state, item: [...state.item, action.payload] }
    ),
    remove: (state, action) => (
      { ...state, item: state.item.filter(val => val.id !== action.payload) }
    ),
    update: (state, action) => {
     state.item.filter((val) => {
        if (val.id === action.payload.id)
          val.qty = action.payload.qty
      })

    }
  }
})

export const { changeTable, add, update, remove } = foodSlice.actions;
export default foodSlice.reducer;