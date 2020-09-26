const fetchLoginData =()=>{
    return (dispatch)=>{
        fetch("http://localhost:5000/credentials")
        .then(res => res.json())
        .then(res => {
           // console.log(res)
            dispatch({type:"LOGIN_DATA",payload:res})
        })
        .catch(err => console.log(err))

    }
}
export default fetchLoginData