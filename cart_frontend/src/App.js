import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

function App() {

  // we are expecting user object atleast have id;
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  //endPoints
  const apiEndPoints = 'http://localhost:8000/products';

  const notifyError = () => toast.error('Something went Wrong');

  useEffect(() => {
    // no such functionality to store loggedIn User ie always undefined
    const getCurrentUser = (token) => {
      try {
        return localStorage.getItem(token)
      } catch {
        return {};
      }
    }
    setUser(getCurrentUser('weird_string'));
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(`${apiEndPoints}/`);
        setProducts(data)
      } catch (e) {
        notifyError()
      }
    }
    getProducts();
  }, [])

  const handleIncrement = async (product) => {
    const quantity = product.quantity;
    try {
      const updatedProducts = products.map(p => {
        if (p === product) {
          p.quantity += 1
        }
        return p
      })
      await axios.patch(`${apiEndPoints}/${product.id}/`, { quantity: quantity + 1 })
      setProducts(updatedProducts);
    } catch (e) {
      notifyError()
    }
  }

  const handleDecrement = async (product) => {
    const quantity = product.quantity;
    try {
      const updatedProducts = products.map(p => {
        if (p === product) {
          p.quantity -= 1
        }
        return p;
      });
      await axios.patch(`${apiEndPoints}/${product.id}/`, { quantity: quantity - 1 })
      setProducts(updatedProducts)
    } catch (e) {
      notifyError()
    }
  }

  const handleDelete = async (product) => {
    try {
      const updatedProducts = products.map(p => {
        if (p === product) {
          p.quantity = 0
        }
        return p;
      });
      setProducts(updatedProducts);
      await axios.patch(`${apiEndPoints}/${product.id}/`, { quantity: 0 })
    } catch (e) {
      notifyError()
    }
  }

  const selectedProduct = () => {
    return products.filter(p => p.quantity !== 0).length;
  }

  return (
    <React.Fragment>
      <NavBar user={user} count={selectedProduct()} />
      <Toaster position="top-right" />
      <Routes>
        <Route
          path='/products'
          element={
            <Product
              products={products}
              onHandleIncrement={handleIncrement}
              onHandleDecrement={handleDecrement} />
          } />
        <Route
          path='/cart'
          element={
            <Cart
              count={selectedProduct()}
              onHandleIncrement={handleIncrement}
              onHandleDecrement={handleDecrement}
              onDelete={handleDelete}
              products={products.filter(p => p.quantity !== 0)}
            />} />
        <Route path='/' element={<Navigate to='/products' />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
