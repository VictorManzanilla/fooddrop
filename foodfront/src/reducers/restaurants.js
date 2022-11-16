
const initialState = {
    restaurants: [
        {id: 0, name: 'Tacos El Tio', address: '3734 W Grand Ave, Chicago, IL 60651', opening_hours: '9am - 9:30pm', cuisine: 'Mexican'},
        {id: 1, name: 'El Habanero', address: '3300 W Fullerton Ave, Chicago, IL 60647', opening_hours: '11am - 8pm', cuisine: 'Mexican'},
        {id: 2, name: 'Turkey Chop', address: '3506 W Chicago Ave, Chicago, IL 60651', opening_hours: '11am - 8pm', cuisine: 'American'},
        {id: 3, name: 'El Mofonguito', address: '3625 W North Ave, Chicago, IL 60647', opening_hours: '10am - 8pm', cuisine: 'Puerto Rican'}
    ]
}


// const restaurants = (state=initialState, action) => {
//     //restaurant was nested, I don't know how
//     console.log(state.restaurants)
//     return state.restaurants
// }

const restaurants = (state = initialState, action) => {
    
   switch(action.type){
       case 'FETCH_RESTAURANT_SUCCESS':
           return[...state.restaurants];
           case 'NEW_USER':
            return[...state, action.newUser]; 
           default:
           return state.restaurants
   }
}
export default restaurants 

// const restaurants = (state= initialState, action) => {
//     // console.log(...state.restaurants)
//    switch(action.type){
//        case 'FETCH_RESTAURANTS_SUCCESS':
//            return[...state.restaurants, action.data]
//         case 'NEW_USER':
//             return[...state, action.newUser]    
//         case 'DELETE_USER':
//             const delId = parseInt(action.id)
//             const delNote = state.filter(note => {
//                 return note.id !== delId
//                 })
//             return delNote
//            default:
//            return state.restaurants
//    }
// }
// export default restaurants 