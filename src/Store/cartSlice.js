// import { createSlice } from "@reduxjs/toolkit";


// const FetchFromLocalStorage = () => {
//     let cart = localStorage.getItem('cart');
//     if (cart) {
//         return JSON.parse(localStorage.getItem('cart'));
//     }
//     else {
//         return [];
//     }
// }

// const storeInLocalStorage = (data) => {
//     localStorage.setItem('cart', JSON.stringify(data))
// }

// const initialState = {
//     carts: FetchFromLocalStorage(),
//     ItemCount: 0,
//     totalAmount: 0,
// }


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const isItemInCart = state.carts.find(item => item.id === action.payload.id)


//             if (isItemInCart) {
//                 const tempCart = state.carts.map(item => {
//                     if (item.id === action.payload.id) {
//                         let tempQty = item.product_qty + action.payload.product_qty;
//                         return {
//                             ...item, product_qty: tempQty,
//                             totalPrice: tempQty * item.product_price_offer
//                         }
//                     }
//                     else {
//                         return item;
//                     }

//                 });
//                 // console.log(isItemInCart);

//                 state.carts = tempCart
//                 storeInLocalStorage(state.carts);
//             } else {
//                 state.carts.push({ ...action.payload });
//                 storeInLocalStorage(state.carts)
//             }
//         },

//         removeItem: (state, action) => {
//             const filteredCart = state.carts.filter(val => val.id !== action.payload);
//             state.carts = filteredCart
//             storeInLocalStorage(state.carts)
//         },

//         clearcart: (state) => {
//             state.carts = [];
//             storeInLocalStorage(state.carts)
//         },

//     },
// });


// export const { addToCart, removeItem, clearcart } = cartSlice.actions;
// export const getAllCarts = (state) => state.cart.carts;
// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const FetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    else{
        return [];
    }
}

    const storeInLocalStorage = (data) => {
        localStorage.setItem('cart', JSON.stringify(data))
    }
 
    const initialState = {
        carts : FetchFromLocalStorage(),
        ItemCount: 0,
        totalAmount: 0,
    }
    const cartSlice = createSlice({
        name:'cart',
        initialState,
        reducers:{
            addToCart : (state,action) => {
                const isItemInCart = state.carts.find(item => item.id === action.payload.id)

                if(isItemInCart){
                    const tempCart = state.carts.map(item => {
                        if(item.id === action.payload.id){
                            let tempQty = item.product_qty + action.payload.product_qty;
                            return{
                                ...item,product_qty:tempQty,
                                totalPrice: tempQty * item.product_price_offer
                            }                           
                        }
                        else{
                            return item;
                        }
                    });
                state.carts=tempCart
                storeInLocalStorage(state.carts);
                }else{
                    state.carts.push({...action.payload});
                    storeInLocalStorage(state.carts)
                }
            },

            removeItem : (state,action) => {
            const filteredCart = state.carts.filter(val => val.id !== action.payload);  
            state.carts = filteredCart
            storeInLocalStorage(state.carts) 
        },

clearcart : (state) => {
    state.carts = [];
    storeInLocalStorage(state.carts)
},

        },
    });

    export const {addToCart,removeItem,clearcart}  = cartSlice.actions;
    export const getAllCarts = (state) => state.cart.carts;
    export default cartSlice.reducer;