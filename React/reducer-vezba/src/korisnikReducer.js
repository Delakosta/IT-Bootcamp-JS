


const korisnikReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {name: action.payload.name, id: Math.random() * 100}];

        default:
            return state;
    }
}
export default korisnikReducer;