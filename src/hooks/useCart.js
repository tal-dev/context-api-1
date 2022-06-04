import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [ addedItems, setAddedItems ] = useState([])

    const addItem = (item) => {
        if(!addedItems.some(ele => ele.id === item.id)) {
            const updatedList = [...addedItems, item]
            setAddedItems(updatedList)
        }
    }
    
    const removeItem = (item) => {
        const updatedList = addedItems.filter(ele => ele.id !== item.id)
        setAddedItems(updatedList)
    }

    return (
        <CartContext.Provider value={{addedItems, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)