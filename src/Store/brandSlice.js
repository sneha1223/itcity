// import { createSlice } from "@reduxjs/toolkit";


// export const brandSlice = createSlice({
//     name: "brand",
//     initialState: {
//         availableBrand: [],
//         selectedBrand: [],
//         selectedData: [],
//     },
//     reducers: {
//         setAvailableBrands(state, action) {
//             state.availableBrand = action.payload
//         },
//         setSelectedBrand(state, action) {
//             state.selectedBrand = action.payload
//         },
//         setSelectedData(state, action) {
//             state.selectedData = action.payload
//         }
//     },

// })

// export const { setAvailableBrands, selectedBrand, selectedData } = brandSlice.actions
// export default brandSlice.reducer;



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API_CLIENT } from "../Constants";


// export const fetchAsyncBrand = createAsyncThunk(
//     "filterBrand/fetchAsyncBrand",
//     async () => {
//         const response = await API_CLIENT.get(`/findAllBrandDetails`);
//         const data = await response.data.data;
//         return data;
//     }
// )



// const initialState = {
//     AvailableBrands: [],
//     BrandByCategory: [],
//     selectedBrand: [],
//     selectedData: [],
// }

// export const brandSlice = createSlice({
//     name: "brand",
//     initialState,
//     reducer: {
//         setAvailableBrand(state, action) {
//             state.AvailableBrands = action.payload
//         },
//         setSelectedBrand(state, action) {
//             state.selectedBrand = action.payload;
//         },
//         setSelectedData(state, action) {
//             state.selectedData = action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchAsyncBrand.fulfilled, (state, action) => {
//                 state.BrandByCategory = action.payload;
//             })
//             .addCase(fetchAsyncBrand, () => {
//                 console.log("Rejected");
//             })
//     }
// })

// export const { setAvailableBrand, setSelectedBrand, setSelectedData } = brandSlice.actions
// export const getBrandByCategories = (state) => state.brand.BrandByCategory;
// export default brandSlice.reducer;



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API_CLIENT } from "../Constants";

// export const fetchAsyncBrandFilter = createAsyncThunk(
//     "BrandsByCategory/fetchAsyncBrandFilter",
//     async () => {
//         const response = await API_CLIENT.get(`/findAllBrandDetails`);
//         const data = await response.data.data;
//         return data;
//     }
// );



//  const brandSlice = createSlice({
//     name: "brands",
//     initialState : {
//     // AvailableBrands: [],
//     BrandsByCategory: [],
//     SelectedBrand: [],
//     SelectedData: [],
//     },
//     reducers: {
//         // setAvailableBrands(state, action) {
//         //     state.AvailableBrands = action.payload;
//         // },
//         setSelectedBrand(state, action) {
//             state.SelectedBrand = action.payload;
//         },
//         setSelectedData(state, action) {
//             state.SelectedData = action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder

//             .addCase(fetchAsyncBrandFilter.fulfilled, (state, action) => {
//                 state.BrandsByCategory = action.payload;
//             })
//             .addCase(fetchAsyncBrandFilter.rejected, () => {
//                console.log("Rejected");
//             }) 
//     }
// })

// export const {setSelectedBrand, setSelectedData } = brandSlice.actions;
// export const getBrandFilter = (state) => state.brands.BrandsByCategory;
// export default brandSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_CLIENT } from "../Constants";

//BrandCategories
export const fetchAsyncBrandCategories = createAsyncThunk(
    'BrandByCategory/fetchAsyncBrandCategories',
    async () => {
        const response = await API_CLIENT.get(`/findAllBrandDetails`);
        const data = await response.data.data;
        return data;
    }
);

const BrandSlice = createSlice({
    name: 'brands',
    initialState: {
        //  availableBrand : [],
        BrandByCategory: [],
        selectedData: [],
        selectedBrands: [],
    },
    reducers: {
        setAvailableBrands(state, action) {
            state.availableBrand = action.payload;
        },
        setSelectedBrands(state, action) {
            state.selectedBrands = action.payload;
        },
        setSelectedData(state, action) {
            state.selectedData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder

            //BrandCategories
            .addCase(fetchAsyncBrandCategories.fulfilled, (state, action) => {
                state.BrandByCategory = action.payload;
            })
            .addCase(fetchAsyncBrandCategories.rejected, () => {
                console.log("Rejected")
            })
    }
})
export const { setAvailableBrands, setSelectedBrands, setSelectedData } = BrandSlice.actions;
export const getBrandByCategories = (state) => state.brands.BrandByCategory;
export default BrandSlice.reducer;
