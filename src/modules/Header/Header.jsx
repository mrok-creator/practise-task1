import Menu from "./Menu";
import Logo from "./Logo"

import s from "./header.module.css";

import headerMenu from "../../data/header-menu.json";

function Header() {
  return (
    <div>
      <Menu items={headerMenu} />
      <Logo/>
    </div>
  );
}

export default Header;
