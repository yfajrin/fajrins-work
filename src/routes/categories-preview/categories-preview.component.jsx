import { useSelector } from 'react-redux'
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);

    return (
        <div className='categories-preview-container'>
            { isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => 
                    {const products = categoriesMap[title];
                    return (<CategoryPreview key={title} products = {products} title={title} />
                    )})
                )
            }
        
        </div>
        
    );
}

export default CategoriesPreview