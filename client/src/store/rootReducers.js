import authReducer from "./Reducers/authReducer";
import TaskReducer from "./Reducers/TaskReducer";
import ListTaskReducer from "./Reducers/listTaskReducer";
import SettingReducer from "./Reducers/settingReducer";

const rootReducer = {
  auth: authReducer,
  task: TaskReducer,
  taskList: ListTaskReducer,
  settings: SettingReducer,
};
export default rootReducer;
