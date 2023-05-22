import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";

/**Store is a global state that saves entire info about application */
//https://redux-toolkit.js.org/api/configureStore - based on redux tollkit docs:
export const store = configureStore({
    // Reducer - pure function that specifies how the application's state should change in response to dispatched actions. It takes the current state and an action as parameters and returns a new state based on the action type.
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    }, 

    // Middleware allows us to extend the behavior of the dispatch function. It sits between the action being dispatched and the reducer receiving that action. Middleware can intercept actions, perform additional tasks, and optionally modify the action or dispatch new actions.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})