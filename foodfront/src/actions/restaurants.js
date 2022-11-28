


export const fetchRestaurantsSuccess = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/restaurants',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        })
        .then((res) => res.json())
        .then((data) =>
        dispatch({type: 'FETCH_RESTAURANT_SUCCESS'})
        )
        
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
