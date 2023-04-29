import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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