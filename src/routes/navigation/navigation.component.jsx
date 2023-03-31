import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as TheLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = ( ) => {
    return(
      <Fragment>
        <div className = 'navigation'>
          <Link className='logo-container' to='/'>
            <TheLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            <Link className='sign-in' to='/sign-in'>SIGN IN</Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation