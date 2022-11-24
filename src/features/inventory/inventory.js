import React from "react";
import {
  addProduct,
  removeProduct,
  changePrice,
  selectInventory,
} from "./inventorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Product from "../Product/Product";
import "./inventory.css";

export default function Inventory() {
    const [productInputs, setProductInputs] = useState({name: "", price: ""})
    const inventory = useSelector(selectInventory);
    const dispatch = useDispatch();

    const deleteProduct = function(productName){
        dispatch(removeProduct(productName))
    }

    const addNewProduct = function(){
        let newProduct = {name: productInputs.name, price: productInputs.price}
        dispatch(addProduct(newProduct))
    }

    const updatePrice = function(product){
        dispatch(changePrice(product))
    }

    const handleInput = function(event){
        setProductInputs({...productInputs, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <h1>Total Number Of Products: {inventory.length}</h1>
            <div className="inventory-container">
                {inventory.map((product) => (
                    <Product key={product.name} product={product} deleteProduct={deleteProduct} updateProductPrice={updatePrice}/>
                ))}
            </div>

            <div className="add-product-container">
                <input
                    type="text"
                    name="name"
                    value={productInputs.name}
                    placeholder="Product Name"
                    onChange={handleInput}
                ></input>

                <input
                    type="number"
                    name="price"
                    value={productInputs.price}
                    placeholder="Product Price"
                    onChange={handleInput}
                ></input>

                <button className="add-product-btn" onClick={addNewProduct}>+</button>
            </div>
        </div>

    );
}
