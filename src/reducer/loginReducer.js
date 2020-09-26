const initialState ={
    loginData:{}
}

const fecthLoginData =(state=initialState,action)=>{
    if(action.type === "LOGIN_DATA"){
        state = {...state,loginData:action.payload}
    }
   return state
}
export default fecthLoginData