

import { configureStore } from "@reduxjs/toolkit";

import sliceCart from "./slices/sliceCart";

const store = configureStore({
    reducer: {
        cart: sliceCart,
    }
});

export default store;