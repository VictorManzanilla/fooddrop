
const initialState = []



const restaurants = (state= initialState, action) => {
   switch(action.type){
       case 'FETCH_RESTAURANTS_SUCCESS':
           return[{...action.data}]
        case 'NEW_USER':
            return[...state, action.newUser]    
        case 'DELETE_USER':
            const delId = parseInt(action.id)
            const delNote = state.filter(note => {
                return note.id !== delId
                })
            return delNote
           default:
           return state
   }
}
export default restaurants 