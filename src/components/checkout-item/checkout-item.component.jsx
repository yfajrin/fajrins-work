import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context'

const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;
    const addItemToCartHandler = () => addItemToCart(cartItem);
    const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
    const decreaseItemFromCartHandler = () => decreaseItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={decreaseItemFromCartHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeItemFromCartHandler}>&#10005;</div>
        </div>
    )

}

export default CheckoutItem;