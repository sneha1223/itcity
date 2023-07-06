import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_CLIENT } from "../Constants";
import { createSelector } from 'reselect'

export const registration = createAsyncThunk(
    "registration/registerUser",
    async (userData) => {
        try {
            const response = await API_CLIENT.post('/register', userData);
            const data = await response.data.data;
            return data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
        }

    }

);

// export const login = createAsyncThunk(
//     "auth/login",
//     async ({ customer_email, password }) => {
//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             }
//             const response = await API_CLIENT.post({ customer_email, password }, config)
//             const token = await response.data.token;
//             console.log("token", token);
//             localStorage.setItem('token', token);
//             localStorage.setItem('token', JSON.stringify(token))
//             const user = response.data.user;

//             localStorage.setItem('user', user);
//             localStorage.setItem('user', JSON.stringify(user))
//             return { token, user };

//         } catch (error) {
//             throw new Error(error.response.data.message)
//         }
//     }
// );

export const login = createAsyncThunk(
    "auth/login",
    async ({ customer_name, password }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await API_CLIENT.post({ customer_name, password }, config)
            const token = await response.data.token;
            console.log("token", token);
            localStorage.setItem("token", token);
            localStorage.setItem('token', JSON.stringify(token));
            const user = response.data.user;

            localStorage.setItem("user", user);
            localStorage.setItem("user", JSON.stringify(user))

            return { token, user };
        } catch (error) {
             throw new Error(error.response.data)
        }
    }
);

export const fetchAsyncUserDetails = createAsyncThunk(
    "name/fetchAsyncuserdetails",
    async () => {
        try {
            const response = await API_CLIENT.get(`http://itcity.tectuz.com/api/getUserbyToken?customer_id=23672`)
            const data = await response.data.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }

)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",
        token: [],
        userDetails: [],
    },
    reducers: {
        clearUser: (state) => {
            state.user = "";
            state.token = "";
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(registration.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(registration.rejected, (state, action) => {
                console.log("Rejected");
            })

            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                console.log("Rejected");
            })

            .addCase(fetchAsyncUserDetails.fulfilled, (state, action) => {
                state.userDetails = action.payload;
            })
            .addCase(fetchAsyncUserDetails.rejected, (state, action) => {
                console.log("Rejected")
            })
    }
})
const selectUser = state => state.user;
export const selectToken = createSelector(
    selectUser,
    user => user.token
)

export const { clearUser } = authSlice.actions;
export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export const getuserDetails = (state) => state.auth.userDetails;
export default authSlice.reducer

