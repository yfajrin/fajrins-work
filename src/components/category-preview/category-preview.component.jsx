import { Link } from 'react-router-dom'
import { CategoryPreviewContainer, TitleStyle, PreviewStyle } from './category-preview.styles'
import ProductCard from '../product-card/product-card.component'

const CategoryPreview = ({ title, products}) => {

    return (
        <CategoryPreviewContainer>
            <h2>
            <Link to={title}><TitleStyle>{title.toUpperCase()}</TitleStyle></Link>
            </h2>
            <PreviewStyle>
                {
                    products
                    .filter((_,idx) => idx < 4)
                    .map((product) => 
                    <ProductCard key={product.id} product={product} />
                    )
                }
            </PreviewStyle>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview