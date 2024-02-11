import axios from "axios";
import {HideLoader, ShowLoader} from "../store/Reducers/settingReducer";
import { SetNewTask,SetCompletedTask,SetCanceledTask,SetProgressTask } from "../store/Reducers/listTaskReducer";

export function TaskListByStatus(Status){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/update-status/:id/"+Status;
    axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(Status==="New"){
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if(Status==="Completed"){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status==="Canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
            else if(Status==="Progress"){
                debugger;
                store.dispatch(SetProgressTask(res.data['data']))
            }
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}