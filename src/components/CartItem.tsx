import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/products.json'
type CartItemProps = {
    id: number
    quantity: number
}
const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id == id);
    if (item == null) return null;
    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            <img src={item.thumbnail} style={{ width: "145px", height: "75px", objectFit: "cover" }} />
            <div className='me-auto'>
                <div>
                    {item.title} {quantity > 1 && <span
                        className='text-muted text-sm'
                    >x{quantity}</span>}
                </div>
                <div className='me-auto text-md' >
                    ${item.price}
                </div>
                        
               </div>
               <div>
                    ${item.price*quantity}
                </div>
                <Button variant='outline-danger' size="sm" onClick={()=>removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem