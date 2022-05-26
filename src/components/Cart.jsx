import React from 'react'
import useCart from '../hooks/useCart'

export default function Cart() {
    const {addedItems} = useCart()
    console.log(addedItems)
    return (
        <div className='cart'>
            {addedItems.length} Items
        </div>
    )
}
