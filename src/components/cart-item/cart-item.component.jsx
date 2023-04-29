import { CartItemContainer, ItemDetails, ImageStyle, NameStyle } from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <ImageStyle src={imageUrl} alt = {`${name}`} />
            <ItemDetails>
            <NameStyle>{name}</NameStyle>    
            <span className='price'>{quantity} x ${price} </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem