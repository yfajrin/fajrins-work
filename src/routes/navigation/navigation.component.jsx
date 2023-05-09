import { Fragment } from 'react';
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from './navigation.styles.jsx'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as TheLogo } from '../../assets/logo.svg'
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = ( ) => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    return(
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/' >
            <TheLogo />
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to='/shop'>SHOP</NavLink>
            {
              currentUser != null ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                : (
                <NavLink to='/auth'>SIGN IN</NavLink>)
            }
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation