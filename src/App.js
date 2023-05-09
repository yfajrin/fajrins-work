import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from './store/user/user.action';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component'; 
import Checkout from './routes/checkout/checkout.component';
import Footer from './routes/footer/footer.component';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {   
    const unsubscribe = () => onAuthStateChangedListener((user) => {
        if (user) {
         createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
        })
    return unsubscribe    
}, [dispatch])



  return (
    <div>
    <Routes>
      <Route path ='/' element = { <Navigation />}>
        <Route index element = { <Home /> } />
        <Route path='shop/*' element = { <Shop /> } />
        <Route path='auth' element = { <Authentication /> } />
        <Route path='checkout' element = { <Checkout /> } />
      </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
