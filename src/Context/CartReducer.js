export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                items: [action.payload, ...state.items],
            }

        case 'INCREMENT_ITEM':
            return{
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload){
                        const newQtyInc = item.qty + 1;
                        const newBillInc = item.unitPrice * newQtyInc;
                        item.qty = newQtyInc;
                        item.itemsBill = newBillInc;
                    }
                    return item;
                }),
            }
        case 'DECREMENT_ITEM':
            return{
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload){
                        if(item.qty > 1){
                            const newQtyDec = item.qty - 1;
                            const newBillDec = item.unitPrice * newQtyDec;
                            item.qty = newQtyDec;
                            item.itemsBill = newBillDec;
                        }
                        else{
                            item.qty = item.qty;
                        }
                    }
                    return item;
                }),
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        case 'CLEAR_CART':
            return{
                ...state,
                items: [],
            }
        default:
            return state;
    }
}