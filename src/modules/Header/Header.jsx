import Menu from "./Menu";

import s from "./header.module.css";

import headerMenu from "../../data/header-menu.json";

function Header() {
  return (
    <div>
      <Menu items={headerMenu} />
    </div>
  );
}

export default Header;
