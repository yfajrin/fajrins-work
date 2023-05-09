import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItemsStyle, EmptyMessage, TotalContainer, ButtonDropdownStyle } from './cart-dropdown.styles.jsx'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
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