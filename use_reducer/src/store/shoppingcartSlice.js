import { createSlice } from "@reduxjs/toolkit";

const shoppingcartSlice = createSlice({
    name: "shoppingcart-demo",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    }
})