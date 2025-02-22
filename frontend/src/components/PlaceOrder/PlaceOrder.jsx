import React, { useContext, useEffect, useState } from 'react'
import "./PlaceOrder.css"
import { useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom"

const PlaceOrder = () => {

    // const { getCartTotalAmount, token, food_list, cartItems, url } = useContext(StoreContext)

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const navigate = useNavigate()

    const placeOrder = (event) => {
        event.preventDefault()
        // console.log("Your order is placed")
        navigate("/stripePayment")
    }

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!token) {
    //         navigate("/cart")
    //     }
    //     else if (getCartTotalAmount() === 0) {
    //         navigate("/cart")
    //     }
    // }, [token])

    return (
        <form onSubmit={placeOrder} className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last Name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email address' />
                <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street' />
                <div className='multi-fields'>
                    <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City' />
                    <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='Zip code' />
                    <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' />
                </div>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone' />
            </div>
            <div className='place-order-right'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Sub Total</p>
                            <p>$100</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>$5</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>$10</b>
                        </div>
                    </div>
                    <div className='payment-modes'>
                        <h3>Payment:</h3>
                        {/* <div>
                            <input type='radio' name='payment' id="COD" checked />
                            <label for="COD">Cash on Delivery</label>
                        </div> */}
                        <div>
                            <input type='checkbox' id='stripe' />
                            <label for="stripe">Stripe Online Payment</label>
                        </div>
                        <button className='payment1-button' type='submit' >PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
