import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),    
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: '/users/signup',
                method: 'POST',
                body: data,
            }),            
        }),
        logIn: builder.mutation({
            query: data => ({
                url: '/users/login',
                method: 'POST',
                body: data,
            }),            
        }),
        logOut: builder.mutation({
            query: data => ({
                url: '/users/logout',
                method: 'POST',
                body: data,
            }),            
        }),
        getUser: builder.query({
            query: () => '/users/current',              
        }),    
    }),
});

export const {
    useGetUserQuery,
    useRegisterMutation,
    useLogInMutation,
    useLogOutMutation,
} = authAPI;