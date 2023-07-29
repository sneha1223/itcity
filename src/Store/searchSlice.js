import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CLIENT } from "../Constants";


export const fetchAsyncSearch = createAsyncThunk (
    "fetchAsyncSearch",
    async ({searchterm})=>{
       const response = await API_CLIENT.get (`/searchProductOrBrandOrCategory?cur=KWD&value=${searchterm}`)
       const data = await response.data.data.data;
       return data;
    }
)

const initialState = {
  searchterm: [],
  loading: false,

}
export const searchSlice = createSlice ({
    name: "searchterm",
    initialState,
    reducers: {
      clearSearch : (state,action)=> {
        state.searchterm = []
      }
    },
    extraReducers: (builder) =>{
      builder

      .addCase(fetchAsyncSearch.fulfilled,(state,action) =>{ 
        state.searchterm = action.payload
        state.loading = false;
      })
      .addCase(fetchAsyncSearch.rejected,(state,action) =>{
        console.log("Rejected")
      })
    }
})

export default  searchSlice.reducer;
export const { clearSearch,searchterm} = searchSlice.actions;
export const getSearchterm = (state) =>state.searchterm.searchterm;