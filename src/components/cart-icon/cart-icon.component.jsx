import { CartIconContainer, ItemCount, ShoppingIconStyle } from './cart-icon.styles'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconStyle />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;