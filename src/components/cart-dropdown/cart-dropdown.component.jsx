import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItemsStyle, EmptyMessage, TotalContainer, ButtonDropdownStyle } from './cart-dropdown.styles.jsx'
import { CartContext } from '../../context/cart.context'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItemsStyle> 
                {cartItems.length 
                ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>)))
                : <EmptyMessage>Your cart is empty</EmptyMessage>    
                }
            </CartItemsStyle>
            <TotalContainer>
                Total: ${cartTotal}
            </TotalContainer>
            <ButtonDropdownStyle onClick={goToCheckoutHandler}>GO TO CHECKOUT</ButtonDropdownStyle>
        </CartDropdownContainer>
    )
}

export default CartDropdown