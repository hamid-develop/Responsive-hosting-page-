import {useState} from 'react'
import "./header.scss";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";

const Header = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)

  const handleCollapseMenu = () => {
    setMenuCollapse(!menuCollapse)
  }
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
          {menuCollapse ? <ul className="main-menu" >
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
              <a className=" login-btn">
                Login
                <span>
                  <UserOutlined />
                </span>
              </a>
            </li>
          </ul> : null }
          
          <input type="checkbox" id="check" className="checkbox" hidden />
          <div className="hamburger-menu" 
          onClick={handleCollapseMenu}>
            <label for="check" className="menu">
              <div className="menu-line menu-line-1"></div>
              <div className="menu-line menu-line-2"></div>
              <div className="menu-line menu-line-3"></div>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
