const iState = {
    name:[],
    email:"praful@gmail.com"
}

const reducer = (state=iState,action) => {
    switch (action.type) {
        case 'LOAD_POST':
            return {
                ...state,
                name:action.payload
            }
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email:action.payload
            }
        default:
            return state;
    }
}

export default reducer;