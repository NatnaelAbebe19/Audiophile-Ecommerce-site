const initialState = {
    cartItems: []
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
           const newItem = action.payload;
           const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
           if(existingItemIndex !== -1){
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            return {
                ...state, 
                cartItems: updatedCartItems
            };
           }else{
            return {...state, 
            cartItems: [...state.cartItems, {...newItem, quantity: 1}]
           };
        }
            default:
                return state;
    }
};
export default rootReducer;