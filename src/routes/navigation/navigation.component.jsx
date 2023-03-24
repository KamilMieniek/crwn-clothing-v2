import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.styles.scss';
function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
