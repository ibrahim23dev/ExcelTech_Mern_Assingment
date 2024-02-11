import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/api";
export const create_task = createAsyncThunk(
  "task/create_task",
  async (task, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.post("/create-tasks", task, {
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
        `/get-task?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        { withCredentials: true }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const update_task_status = createAsyncThunk(
  "task/update_task_status",
  async (_id, status, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.post(`/update-status/${_id}/${status}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const delete_task = createAsyncThunk(
  "task/delete_task",
  async (_id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await Api.delete(`/delete-task/${_id}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const taskReducer = createSlice({
  name: "task",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    tasks: [],
    task: "",
    totaltask: 0,
    NewTask: [],
    InProgresTask: [],
    CompletedTask: [],
    CenceledTask: [],
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    SetNewTask: (state, action) => {
      state.New = action.payload;
    },
    SetCompletedTask: (state, action) => {
      state.Completed = action.payload;
    },
    SetInprogressTask: (state, action) => {
      state.InProgres = action.payload;
    },
    SetCenceledTask: (state, action) => {
      state.Cenceled = action.payload;
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
export const {
  messageClear,
  SetNewTask,
  SetCompletedTask,
  SetInprogressTask,
  SetCenceledTask,
} = taskReducer.actions;
export default taskReducer.reducer;
