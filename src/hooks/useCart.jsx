import React, {useState, createContext, useContext} from 'react'

const CartContext = createContext(null)

export const CartProvider = ({value, children}) => {

    const [ addedItems, setAddedItems] = useState(value)
    console.log(addedItems)

    const addItem = (item) => {
        console.log("hello")
    }

    const removeItem = (item) => {
        const updatedCart = value.filter(book => book.id !== item.id)
        setAddedItems(updatedCart)
    }

    return (
        <CartContext.Provider value={{addedItems, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export default useCart