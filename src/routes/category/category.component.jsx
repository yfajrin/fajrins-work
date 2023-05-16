import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx'
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isStillLoading = useSelector(selectIsCategoriesLoading);

    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(() => { 
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        {console.log(`isLoading: ${isStillLoading}`)}
        {
            isStillLoading ? 
            (<Spinner />) :
            (<CategoryContainer>
                {   products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryContainer>)
        }
        </Fragment>
    )
}

export default Category;