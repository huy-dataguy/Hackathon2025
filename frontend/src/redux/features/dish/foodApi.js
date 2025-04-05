import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/getBaseURL';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const foodApi = createApi({
    reducerPath: 'foodApi',
    baseQuery,
    tagTypes: ['Dishes'],
    endpoints: (builder) => ({
        // fectchAllBooks: builder.query({
        //     query: () => '/',
        //     providesTags: ['Dishes'],
        // }),
        // fetchBookById: builder.query({
        //     query: (id) => `/${id}`,
        //     // providesTags: ['Book'], update all books when a book is added
        //     providesTags: (result, error, id) => [{ type: 'Book', id }], // update only the book with the given id

        // }),
        addInfor: builder.mutation({
            query: (newInfor) => ({
                url: '/app/api/profile/init',
                method: 'POST',
                body: newInfor,
            }),
            invalidatesTags: ['Dishes'],
        }),
        addDish: builder.mutation({
            query: (newInfor) => ({
                url: '/app/api/dishes', 
                method: 'POST',
                body: newInfor,
            }),
            invalidatesTags: ['Dishes'],
        })
        
       

    })
});


export const { useAddInforMutation } = foodApi;
export default foodApi;