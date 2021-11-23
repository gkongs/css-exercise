import styled from "@emotion/styled";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 10rem;
  border-bottom: 1px solid black;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const Menu = styled.a`
  color: black;
  font-size: 2rem;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 50px;
  }
`;

const UtilContainer = styled.div`
  display: flex;
`;

const Util = styled.div`
  margin-right: 10px;
`;

const SearchInput = styled.input``;

export { NavContainer, MenuContainer, Menu, UtilContainer, Util, SearchInput };
