import { SearchIcon } from "icons";
import {
  NavContainer,
  MenuContainer,
  Menu,
  UtilContainer,
  Util,
  SearchInput,
} from "../css/NavStyle";

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
        <Util>
          <SearchIcon />
        </Util>
        <SearchInput />
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
