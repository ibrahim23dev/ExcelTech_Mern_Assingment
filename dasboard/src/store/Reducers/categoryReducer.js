import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../api/api';

export const category_add = createAsyncThunk(
  'category/category-add',
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);
      const { data } = await Api.post('/category-add', formData, { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_category = createAsyncThunk(
  'category/category-get',
  async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.get(`/category-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`, { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    categorys: [ ],
    totalCategory: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = '';
      state.successMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(category_add.pending, (state) => {
        state.loader = true;
      })
      .addCase(category_add.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(category_add.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.categorys = [...state.categorys, payload.category];
      })
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.totalCategory = payload.totalCategory;
        state.categorys = payload.categorys;
      });
  },
});

export const { messageClear } = categorySlice.actions;
export default categorySlice.reducer;
