import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/api";
export const create_task = createAsyncThunk(
  "task/create_task",
  async (task, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.post("/create-task", task, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_task = createAsyncThunk(
  "task/get_task",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await Api.get(
        `/read-task?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        { withCredentials: true }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const update_task = createAsyncThunk(
  "task/update_task",
  async (task, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.post("/task-update", task, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const taskReducer = createSlice({
  name: 'task',
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    tasks: [],
    task: "",
    totaltask: 0,
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [create_task.pending]: (state, _) => {
      state.loader = true;
    },
    [create_task.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    },
    [create_task.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    },
    [get_task.fulfilled]: (state, { payload }) => {
      state.totaltask = payload.totaltask;
      state.tasks = payload.tasks;
    },
  },
});
export const { messageClear } = taskReducer.actions;
export default taskReducer.reducer;
