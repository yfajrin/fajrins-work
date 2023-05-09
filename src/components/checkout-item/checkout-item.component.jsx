import { CheckoutItemContainer, ImageContainer, ImageStyle, NameStyle, QuantityStyle, PriceStyle, ValueStyle, ArrowStyle, RemoveButton } from './checkout-item.styles'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price, quantity } = cartItem;
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const decreaseItemFromCartHandler = () => dispatch(decreaseItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ImageStyle src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <NameStyle> {name} </NameStyle>
            <QuantityStyle>
                <ArrowStyle onClick={decreaseItemFromCartHandler}>&#10094;</ArrowStyle>
                <ValueStyle>{quantity}</ValueStyle>
                <ArrowStyle onClick={addItemToCartHandler}>&#10095;</ArrowStyle>
            </QuantityStyle>
            <PriceStyle>{price}</PriceStyle>
            <RemoveButton onClick={removeItemFromCartHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )

}

export default CheckoutItem;