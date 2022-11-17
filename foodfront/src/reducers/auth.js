


const authReducer = (state = {loggedIn: false, currentUser: {}}, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {...state, loggedIn: action.payload.loggedIn, 
                currentUser: action.payload.currentUser}
    default:
        return state
    }
}
export default authReducer
// 
//     return action.data
// case 'LOGOUT_SUCCESS':
//     return {}
// case 'CURRENT_USER':
//     return action.user