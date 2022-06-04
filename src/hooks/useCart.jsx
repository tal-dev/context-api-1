import React, {useState, createContext, useContext} from 'react'

const CartContext = createContext(null)

export const CartProvider = ({value, children}) => {

    const [ addedItems, setAddedItems] = useState(value)

    const addItem = (item) => {
        if(addedItems.every(ele => ele.id !== item.id)) {
            const updatedList = [...addedItems, item];
            setAddedItems(updatedList)
        }
    }

    const removeItem = (item) => {
        const updatedCart = addedItems.filter(book => book.id !== item.id)
        setAddedItems(updatedCart)
    }

    return (
        <CartContext.Provider value={{addedItems, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)