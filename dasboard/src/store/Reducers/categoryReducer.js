import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const categoryAdd = createAsyncThunk(
  'category/category-add',
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);

      const { data } = await api.post('/category-add', formData, { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      console.error('Async Thunk Error:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_category = createAsyncThunk(
  "category/category-get",
  async (
    { perPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/category-get?page=${page}&&searchValue=${searchValue}&&parPage=${perPage}`,
        {
          withCredentials: true,
        }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    categorys: [],
    totalCategory: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [categoryAdd.pending]: (state, _) => {
      state.loader = true;
    },
    [categoryAdd.rejected]: (state, action) => {
  state.loader = false;
  state.errorMessage = action.payload ? action.payload.error : 'Unknown error';
   },
    [categoryAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.categorys = [...state.categorys, payload.category];
    },
    [get_category.fulfilled]: (state, { payload }) => {
      state.totalCategory = payload.totalCategory;
      state.categorys = payload.categorys;
    },
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
