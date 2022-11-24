import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        products: [{name: 'computer', price: 100}, {name: "TV", price: 100}, {name: "Camera", price: 100}],
    },

    reducers: {
        addProduct: (state, action) => {
            let newProduct = action.payload
            state.products.push(newProduct)
        },

        removeProduct: (state, action) => {
            let productToRemove = action.payload
            state.products = state.products.filter(product => product.name != productToRemove)
        }, 

        changePrice: (state, action) => {
            const {name, price} = action.payload
            let productToUpdate = state.products.find(product => product.name === name)
            productToUpdate.price = price
        }
    }
})

export const {addProduct, removeProduct, changePrice} = inventorySlice.actions
export const selectInventory = (state) => state.inventory.products
export default inventorySlice.reducer