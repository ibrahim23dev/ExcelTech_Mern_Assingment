import Swal from "sweetalert2"

function UpdateTask() {
  return  Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {New: 'New', Completed: 'Completed', Progress: 'Progress', Canceled: 'Canceled'},
        inputValue:"",
    }).then(( )=>{
        
        })
    }  
export default UpdateTask

