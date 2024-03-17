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

        case 'REMOVE_FROM_CART':
            const updatedCartItems = state.cartItems.map(item => {
                if(item.id === action.payload.id && item.quantity > 0){
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });

            return {
                ...state, 
                cartItems: updatedCartItems,
            };
        case "REMOVE_SINGLE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };

            case "REMOVE_ALL_FROM_CART":
            return {
                ...state,
                cartItems: []
            };

            default:
                return state;
    }
};
export default rootReducer;
