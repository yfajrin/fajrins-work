import { CartIconContainer, ItemCount, ShoppingIconStyle } from './cart-icon.styles'
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconStyle />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;