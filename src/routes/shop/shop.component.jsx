import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getCategories = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        };
        getCategories();
        
      }, [dispatch]);

    return (
       <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
       </Routes>
        
    );
}

export default Shop