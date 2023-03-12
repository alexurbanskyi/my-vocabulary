import {configureStore} from '@reduxjs/toolkit'
import { wordsApi} from './wordsApi'

export const store = configureStore({
    reducer: {
        [wordsApi.reducerPath]: wordsApi.reducer,
    },
    middleware: (defaultMiddlewear) => defaultMiddlewear().concat(wordsApi.middleware) 
});