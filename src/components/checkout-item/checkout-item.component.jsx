import { CheckoutItemContainer, ImageContainer, ImageStyle, NameStyle, QuantityStyle, PriceStyle, ValueStyle, ArrowStyle, RemoveButton } from './checkout-item.styles'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context'

const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;
    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
    const decreaseItemFromCartHandler = () => decreaseItemFromCart(cartItem);

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