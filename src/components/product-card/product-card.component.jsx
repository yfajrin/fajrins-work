import { ProductCardContainer, FooterStyle, NameStyle, PriceStyle } from './product-card.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const ProductCard = ({product}) => {
    const { name, price, imageUrl} = product; 

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <FooterStyle>
                <NameStyle>{name}</NameStyle>
                <PriceStyle>{price}</PriceStyle>
            </FooterStyle>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;