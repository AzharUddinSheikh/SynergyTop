import React from 'react'

const SingleProduct = ({ product, onHandleIncrement, onHandleDecrement }) => {
    const { quantity, unit_price, title } = product;
    const listArr = product.image.split('/')
    const image = listArr[listArr.length - 1]

    return (
        <div>
            <img src={`media/images/${image}`} />
            <span className='m-3'>
                <button
                    onClick={() => onHandleDecrement(product)}
                    className="btn btn-warning btn-sm"
                    hidden={quantity <= 0}
                >
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <span className='m-3'>{quantity === 0 ? '' : quantity}</span>
                <button
                    onClick={() => onHandleIncrement(product)}
                    className="btn btn-primary btn-sm">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </span>
            <div>
                <span>{title}</span>
                <span style={{ 'marginLeft': '20px' }}>{`$${unit_price}`}</span>
            </div>
        </div>
    )
}

export default SingleProduct;