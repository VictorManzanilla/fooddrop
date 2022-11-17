/////////////new action/////////////////

export const signup = user => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/users',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: user})
        })
        .then(res => res.json())
        .then(data => dispatch({type:'LOGIN_SUCCESS',
         payload: {loggedIn: data.logged_in, currentUser: data.user}}))
    }
}

export const logoutSuccess = () => {
    return {
      type: 'LOGOUT_SUCCESS',
    }
}  










/////////////////old action/////////////
// export const loginSuccess = (data) => {
//     return{
//         type: 'LOGIN_SUCCESS',
//         data: data
//     }
// }


// export const currentUser = (user) => {
//     return{
//         type: 'LOGIN_SUCCESS',
//         data: user
//     }
// }