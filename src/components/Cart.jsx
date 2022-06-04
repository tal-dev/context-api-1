import { useCart } from "../hooks/useCart"

const Cart = () => {
    const {addedItems} = useCart()
    return (
        <div className="cart">
            {addedItems.length}
        </div>
    )
}

export default Cart