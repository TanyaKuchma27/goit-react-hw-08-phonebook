import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './authAPI';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,  
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(
            authAPI.endpoints.register.matchFulfilled,
            (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            }
        );
        builder.addMatcher(
            authAPI.endpoints.logIn.matchFulfilled,
            (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            }
        );
        builder.addMatcher(
            authAPI.endpoints.logOut.matchFulfilled,
            (state, _) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            }
        );
        builder.addMatcher(
            authAPI.endpoints.getUser.matchFulfilled,
            (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            }
        );  
    },
});

export default authSlice.reducer;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getToken = state => state.auth.token;
