
const fetchEmployeeData =()=>{
    return (dispatch)=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(res => {
          //  console.log(res)
            dispatch({type:"EMP_DATA",payload:res})
        })
        .catch(err => console.log(err))

    }
}
export default fetchEmployeeData


