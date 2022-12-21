import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SingleProduct from './common/SingleProduct';
import Table from './common/Table';


const Cart = ({ products, onDelete, onHandleDecrement, onHandleIncrement, count }) => {

    const getTotalPrice = () => {
        return products.reduce((acc, curr) => acc += curr.unit_price * curr.quantity, 0)
    }

    const columns = [
        {
            key: 'product',
            label: 'Producs In Cart',
            content: (product) =>
                <SingleProduct
                    product={product}
                    onHandleDecrement={onHandleDecrement}
                    onHandleIncrement={onHandleIncrement} />
        },
        {
            key: 'delete',
            content: (product) =>
                <button
                    onClick={() => onDelete(product)}
                    className='btn btn-danger btn-sm'>
                    Delete
                </button>
        },
        {
            key: 'totalPrice',
            label: 'Price',
            content: (product) =>
                <span>
                    {`$` + product.unit_price * product.quantity}
                </span>
        }
    ]

    const notify = () => toast.error('Please Login First to continue')

    return (
        <>
            <Toaster
                position="top-right"
            />
            <h3 className='m-3'>Shopping Cart</h3>
            {
                count === 0 ?
                    <h2 style={{ 'marginLeft': '30%' }}>Please Add Products</h2> :
                    <>
                        <Table
                            allData={products}
                            columns={columns} />
                        <div>
                            <span>Total Price</span>
                            <span style={{ 'marginLeft': '81%' }}>{`$` +
                                getTotalPrice()
                            }</span>
                        </div>
                        <div style={{ 'marginLeft': '45%' }}>
                            <button onClick={notify} className='btn btn-primary'>Go to Payment</button>
                        </div>
                    </>
            }
        </>
    )
}

export default Cart;