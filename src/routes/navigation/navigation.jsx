import React, {Fragment, useContext} from "react"
import { Outlet, Link } from "react-router-dom"
import './navigation.style.scss'
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg" 

import { UserContext } from "../../context/user.context"
import { CartContext } from "../../context/cart.context"

import { signOutUser } from "../../utils/firebase/firebase.utils"

import CartIcon from "../../component/cart-icon/cart-icon.component"
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component"


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo className='logo' />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {
              currentUser ? (<span className="nav-link" to='/shop' onClick={signOutUser}>
              LOGOUT
          </span>) : (<Link className="nav-link" to='/auth'>
                SIGN IN
            </Link>)
            }
            <CartIcon />
          </div>
          {
            isCartOpen && <CartDropdown />
          }

        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation