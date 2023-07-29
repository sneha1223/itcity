// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API_CLIENT } from "../Constants";


// export const fetchAsyncMobiles= createAsyncThunk(
//     "fetchAsyncProduct",
//     async (category_id) => {
//         const response = await API_CLIENT.get(`/findlimtProductbyCategoryid?cur=KWD&${category_id}&category_id=82`);
//         const data = await response.data.data;
//         return data;
//     }
//   )

// const initialState = {
//   mobiles: [],
// }

// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchAsyncMobiles.fulfilled, (state, action) => {
//           state.mobiles = action.payload;
//         })
//         .addCase(fetchAsyncMobiles.rejected, (state, action) => {
//           console.log("fetchAsyncMobiles rejected");
//         })
//     },
//     })

//     export const getMobileProduct = (state) => state.product.mobiles;
//     export default productSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CLIENT } from "../Constants";

//Product Mobiles
export const fetchAsyncMobiles = createAsyncThunk(
    'home/fetchAsyncMobiles',
    async (category_id) => {
      const response = await API_CLIENT.get(`/findAllProductbyCategoryid?cur=KWD&category_id=${category_id}&category_id=82`);
      const data = await response.data.data;
      return data;
    }
  )

export const fetchAsyncAccessories = createAsyncThunk (
   "fetchAsyncAccessories",
   async(category_id)=>{
    const response = await API_CLIENT.get(`/findAllProductbyCategoryid?cur=KWD&category_id=${category_id}&category_id=99`);
    const data = await response.data.data;
    return data;
}
)

  const initialState = {
    accessories: [],
    mobiles: [],
  };

  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAsyncMobiles.fulfilled, (state, action) => {
          state.mobiles = action.payload;
        })
        .addCase(fetchAsyncMobiles.rejected, (state, action) => {
          console.log("fetchAsyncMobiles rejected");
        })

        .addCase(fetchAsyncAccessories.fulfilled,(state,action)=>{
            state.accessories = action.payload;
        })
        .addCase(fetchAsyncAccessories.rejected,(state,action)=>{
            console.log("Rejected")
        })

    },
  });
  export const getAccessories = (state) =>state.product.accessories;
  export const getMobileProduct = (state) => state.product.mobiles;
  export const getTabletProduct=(state)=>state.product.tablets;
  export default productSlice.reducer;