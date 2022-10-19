


export const fetchRestaurantsSuccess = () => {
    return {
        type: 'FETCH_RESTAURANT_SUCCESS'
        
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
