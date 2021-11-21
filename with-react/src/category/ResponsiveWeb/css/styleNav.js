import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100px;
  border-bottom: 1px solid black;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const Menu = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 50px;
  }
`;

const UtilContainer = styled.div`
  display: flex;
`;

const Util = styled.div`
  width: 20px;

  :not(:last-child) {
    margin-right: 2 0px;
  }
`;

export { NavContainer, MenuContainer, Menu, UtilContainer, Util };
