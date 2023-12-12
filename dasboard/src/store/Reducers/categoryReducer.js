import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../api/api';

export const CategoryAdd = createAsyncThunk(
  'category/CategoryAdd',
  async ({name,image}, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('image', image)

      const { data } = await Api.post('/category-add',formData, { withCredentials: true });
      console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_category = createAsyncThunk(
  'category/category-get',
  // async ({ parPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
  //   try {
  //     const { data } = await Api.get(`/category-get?page=${page}&searchValue=${searchValue}&parPage=${parPage}`, { withCredentials: true });
  //     return fulfillWithValue(data);
  //   } catch (error) {
  //     return rejectWithValue(error.response.data);
  //   }
  // }
); 


export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    categorys: [],
    totalCategory: 0,
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = '';
      state.successMessage = '';
    },
  },

  extraReducers: {
        [CategoryAdd.pending]: (state, _) => {
            state.loader = true
        },
        [CategoryAdd.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        // [categoryAdd.fulfilled]: (state, { payload }) => {
        //     state.loader = false
        //     state.successMessage = payload.message
        //     state.categorys = [...state.categorys, payload.category]
        // },
        // [get_category.fulfilled]: (state, { payload }) => {
        //     state.totalCategory = payload.totalCategory
        //     state.categorys = payload.categorys
        // },
    }
  
});

export const { messageClear } = categorySlice.actions;
export default categorySlice.reducer;
