import { configureStore } from "@reduxjs/toolkit";
import { builderReducer } from "../reducers/builderReducer";

const reducer = {
    builder: builderReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "development"
})

export default store