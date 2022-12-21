import React from 'react'
import SingleProduct from './common/SingleProduct';

const Product = ({ products, onHandleDecrement, onHandleIncrement }) => {
    return (
        <div className="container mt-5">
            {products.map(product =>
                <div className="row" key={product.id}>
                    <SingleProduct
                        product={product}
                        onHandleDecrement={onHandleDecrement}
                        onHandleIncrement={onHandleIncrement}
                    />
                </div>
            )}
        </div>
    )
}

export default Product;