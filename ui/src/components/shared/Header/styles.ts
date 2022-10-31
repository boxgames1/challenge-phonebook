import styled from "@emotion/styled";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import colors from "../../../theme/colors";

export const Root = styled.div`
  flex-grow: 1;
  padding: 1rem 0;
`;

export const MenuButton = styled(IconButton)`
  margin-right: 2rem;
  color: black;
`;

export const Title = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  background-color: ${colors.bg};
`;

export const AppBarWithoutShadow = styled(AppBar)`
  box-shadow: none;
`;
