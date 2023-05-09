import { ProductCardContainer, FooterStyle, NameStyle, PriceStyle, FlavorStyle } from './product-card.styles.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl, flavor} = product; 

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <FooterStyle>
                <NameStyle>{name}</NameStyle>
                <PriceStyle>{price}</PriceStyle>  
            </FooterStyle>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
            <FlavorStyle>Flavor: {flavor}</FlavorStyle>
        </ProductCardContainer>
    )
}

export default ProductCard;