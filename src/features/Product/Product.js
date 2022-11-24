import React, { useState } from 'react'
import './Product.css'
export default function Product(props) {
    let product = props.product
    const [productPrice, setProductPrice] = useState('')

    const handleInput = function(event){
        setProductPrice(event.target.value)
    }

    const updateProductPrice = function(){
        let updatedProduct = {name: product.name, price: productPrice}
        props.updateProductPrice(updatedProduct)
    }
    return (
        <div className="product">
            <div className="details">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>

            <div className='actions'>
                <input
                    name='price'
                    type='number'
                    value={productPrice}
                    onChange={handleInput}
                    placeholder='Enter new price: '
                >
                </input>

                <button onClick={updateProductPrice}>update</button>
                <button className='buy-btn' onClick={() => props.deleteProduct(product.name)}>BUY</button>
            </div>
        </div>
    )
}
