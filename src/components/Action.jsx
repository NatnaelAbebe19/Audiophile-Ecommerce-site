export const addToCart = (item)=>({
    type: 'ADD_TO_CART', 
    payload: item, 
});

export const removeFromCart = (item)=>({
    type: 'REMOVE_FROM_CART', 
    payload: item, 
});
export const removeAllItemFromCart = (item)=>({
    type: "REMOVE_ALL_FROM_CART", 
    payload: item,
});
export const removeSingle = (item) =>({
    type: "REMOVE_SINGLE_ITEM", 
    payload: item,
});