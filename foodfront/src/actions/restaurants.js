


export const fetchRestaurantsSuccess = () => {
    return {
        type: 'LOAD_RESTAURANTS'
        
    }
}
export const newUser = (newUser) => {
    return {
        type: 'NEW_USER',
        newUser: newUser
    }
}
export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id
    }
}
