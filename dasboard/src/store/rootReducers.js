import authReducer from './Reducers/authReducer';
import TaskReducer from './Reducers/TaskReducer';


const rootReducer = {
    auth: authReducer,
    task: TaskReducer,
}
export default rootReducer