import { useSelector } from 'react-redux'
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <div className='categories-preview-container'>
                {Object.keys(categoriesMap).map((title) => 
                {const products = categoriesMap[title];
                        return (<CategoryPreview key={title} products = {products} title={title} />
                    )})
                }
        </div>
        
    );
}

export default CategoriesPreview