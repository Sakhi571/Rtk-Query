import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Slice } from '../slice/Slice'

export const store = configureStore({
    reducer:{
        [Slice.reducerPath] : Slice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Slice.middleware),
})
setupListeners(store.dispatch)