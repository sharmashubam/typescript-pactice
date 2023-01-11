import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps={
    children:ReactNode
}
type CartItem={
    id:number
    quantity:number
}
type ShoppingCartContext={
    getItemQuantity:(id:number)=>number
    increaseCartQuantity:(id:number)=>void
    decreaseCartQuantity:(id:number)=>void
    removeFromCart:(id:number)=>void
    openCart:()=>void
    closeCart:()=>void
    cartQuantity:number
    cartItems:CartItem[]
    showItemHandler:(id:number)=>void
    itemHandler:()=>number
}


const ShoppingCartContext = createContext({} as ShoppingCartContext);


//hook==> //cartitem contain item having ids

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }:ShoppingCartProviderProps) {

    const[cartItems,setCartItems]= useState<CartItem[]>([]);
    const[isOpen,setIsOpen]= useState(false);
    const [showItem,setShowItem]= useState<number>(0)

    //open
    const openCart=()=>{
        setIsOpen(true);
    }
    //close
    const closeCart=()=>{
        setIsOpen(false)
    }
    const itemHandler=()=>{
        return showItem
    }
    const showItemHandler=(id:number)=>{
        setShowItem(id);
    }

    //quantity
    const cartQuantity= cartItems.reduce((quantity,item) => item.quantity+quantity,0)

    function getItemQuantity(id:number ){
        return cartItems.find(item=>item.id==id)?.quantity || 0
    }

   

    function increaseCartQuantity(id:number){
        setCartItems( prev =>{
            if(prev.find(item=>item.id==id)==null){
                return [...prev,{id:id,quantity :1}]
            }else{
                return  prev.map((item)=>{
                    if(item.id==id){
                        return {...item ,quantity :item.quantity+1}
                    }else{
                        return item ;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number){
        setCartItems( prev =>{
            if(prev.find(item=>item.id==id)?.quantity==1){
                return prev.filter(item => item.id !== id)
            }else{
                return  prev.map((item)=>{
                    if(item.id==id){
                        return {...item ,quantity :item.quantity-1}
                    }else{
                        return item ;
                    }
                })
            }
        })
    }

    function removeFromCart(id:number){
        setCartItems(prev=>{
          return  prev.filter(item=>item.id!==id)
        })
    }


    return (
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,showItemHandler,itemHandler,decreaseCartQuantity,removeFromCart,cartItems,cartQuantity,closeCart,openCart}}>
        {children}
        {/* creating a shopping cart component */}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
    )
     
}