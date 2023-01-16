import React from 'react'
import { Offcanvas, OffcanvasBody, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/products.json'
import CartItem from './CartItem'
type ShoppingCartProps = {
    isOpen: Boolean
}
export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item =>
                        (<CartItem key={item.id} {...item} />)
                    )}
                    <div className='ms-auto fw-bold fs-5'>
                        Total: ${cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id == cartItem.id);

                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)}
                    </div>

                    {cartItems.length>0 && <Link to='/checkout' className='text-xl border text-decoration-none text-black text-center w-[70%] mx-auto px-4 py-2 font-semibold bg-slate-300 hover:bg-slate-100 cursor-pointer shadow-md mt-4'>CHECKOUT</Link> }
                    
                </Stack>
                
            </Offcanvas.Body>

        </Offcanvas>
    )
}
