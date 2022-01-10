import "./header.css";
import {UserOutlined} from '@ant-design/icons'
import logo from "../../../assets/images/logo.png";



const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <ul className="main-menu">
            <li className="menu-item">
              <a className="menu-link">Home</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Services</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Our Plans</a>
            </li>
            <li className="menu-item">
              <a className="menu-link">Tools & Resources</a>
            </li>
            <li className="menu-item">
              <a className="menu-link login-btn">Login<span>
                  <UserOutlined />
                  </span></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
