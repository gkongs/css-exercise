/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "svgs/search.svg";

export default function Nav() {
  return (
    <div css={NavContainer}>
      <div css={MenuContainer}>
        {menus.map(menu => (
          <Link css={Menu} to={menu.to}>
            {menu.name}
          </Link>
        ))}
      </div>
      <div css={UtilContainer}>
        <Search css={Util} />
      </div>
    </div>
  );
}

const NavContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  height: 100px;
  background-color: white;
  border-bottom: 1px solid black;
`;

const MenuContainer = css`
  color: black;
  display: flex;
`;

const Menu = css`
  color: black;
  font-size: 20px;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 50px;
  }
`;

const UtilContainer = css``;

const Util = css`
  width: 30px;
`;

// static values
const menus = [
  { name: "home", to: "/" },
  { name: "main", to: "/" },
  { name: "about", to: "/" },
];
