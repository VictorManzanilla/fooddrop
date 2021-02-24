

export const loginSuccess = (data) => {
    return{
        type: 'LOGIN_SUCCESS',
        data: data
    }
}
export const logoutSuccess = () => {
    return {
      type: 'LOGOUT_SUCCESS',
    }
}  

export const currentUser = (user) => {
    return{
        type: 'LOGIN_SUCCESS',
        data: user
    }
}