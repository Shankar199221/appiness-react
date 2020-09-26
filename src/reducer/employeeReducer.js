const initialState ={
    employeeData:[]
}

const fecthEmployeeData =(state=initialState,action)=>{
    if(action.type === "EMP_DATA"){
        state = {...state,employeeData:action.payload}
   
        
    }
    
   return state
}
export default fecthEmployeeData