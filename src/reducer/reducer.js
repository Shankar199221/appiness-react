import {combineReducers} from 'redux'
import fecthEmployeeData from './employeeReducer'
import fecthLoginData from './loginReducer'


const reducers = combineReducers({
    empData:fecthEmployeeData,
    loginData:fecthLoginData
})

export default reducers