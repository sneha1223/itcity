import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CLIENT } from "../Constants";


// categories Nav 
export const fetchAsyncategories = createAsyncThunk(
  "productCategory/fetchAsyncategories",
  async () => {
    const response = await API_CLIENT.get(`/findAllCategories`)
    const data = await response.data.data;
    return data;
  }
)

// carousel
export const fetchAsyncarousel = createAsyncThunk(
  "carouselCategory/fetchAsyncarousel",
  async () => {
    const response = await API_CLIENT.get("/findHomeImagesByEnglish")
    const data = await response.data.data;
    return data;
  }
)

//All Products
export const fetchAllProduct = createAsyncThunk(
  "allProductCategory/fetchAllProduct",
  async(category_id)=>{
    const response = await API_CLIENT.get(`/findAllProductbyCategoryid?cur=KWD&category_id=${category_id}`)
    const data = await response.data.data;
    return data;
  }
)

// single product
export const fetchSingleProduct = createAsyncThunk(
   "singleProductCategory/fetchSingleProduct",
    async(product_id)=>{
      const response = await API_CLIENT.get(`/findProductbyProductId?cur=KWD&product_id=${product_id}`)
      const data = await response.data.data;
      return data;
    } )

const initialState = {
  categoriesnav: [],
  carouselOne: [],
  allProduct: [],
  singleProduct:[],
}



export const categorynavSlice = createSlice({
  name: "categoriesnav",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncategories.fulfilled, (state, action) => {
        state.categoriesnav = action.payload;
      })
      .addCase(fetchAsyncategories.rejected, (state, action) => {
        console.log("Rejected");
      })

      // carousel 
      .addCase(fetchAsyncarousel.fulfilled, (state, action) => {
        state.carouselOne = action.payload;
      })
      .addCase(fetchAsyncarousel.rejected, (state, action) => {
        console.log("Rejected");
      })

      // AllProduct
      .addCase(fetchAllProduct.fulfilled,(state,action)=>{
        state.allProduct = action.payload;
      })
      .addCase(fetchAllProduct.rejected,(state,action)=>{
        console.log("Rejected");
      })

      // single product
      .addCase(fetchSingleProduct.fulfilled,(state,action)=>{
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected,(state,action)=>{
        console.log("Rejected");
      })
  }


})

export const getCategoriesnav = (state) => state.categoriesnav.categoriesnav;
export const getCategoriesCarousel = (state) => state.categoriesnav.carouselOne;
export const getAllProduct = (state) =>state.categoriesnav.allProduct;
export const getSingleProduct = (state) => state.categoriesnav.singleProduct;
export default categorynavSlice.reducer;