


export const fetchRestaurantsSuccess = (data) => {
    return {
        type: 'FETCH_RESTAURANTS_SUCCESS',
        data: data
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
