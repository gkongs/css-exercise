import { SearchIcon } from "icons";
import {
  NavContainer,
  MenuContainer,
  Menu,
  UtilContainer,
  Util,
} from "../css/styleNav";

export default function Nav() {
  return (
    <NavContainer>
      <MenuContainer>
        {menus.map(menu => (
          <Menu to={menu.to} key={menu.name}>
            {menu.name}
          </Menu>
        ))}
      </MenuContainer>
      <UtilContainer>
        <SearchIcon />
      </UtilContainer>
    </NavContainer>
  );
}

// static values
const menus = [
  { name: "home", to: "/" },
  { name: "main", to: "/" },
  { name: "about", to: "/" },
];
