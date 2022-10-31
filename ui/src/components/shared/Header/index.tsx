import { Typography } from "@material-ui/core";
import Contacts from "@material-ui/icons/Contacts";

import * as S from "./styles";

const Header = () => {
  return (
    <div>
      <S.Root>
        <S.AppBarWithoutShadow position="static">
          <S.StyledToolbar>
            <S.MenuButton edge="start" color="inherit" aria-label="menu">
              <Contacts />
            </S.MenuButton>
            <Typography variant="h2">
              <S.Title to="/">Phone Book App</S.Title>
            </Typography>
          </S.StyledToolbar>
        </S.AppBarWithoutShadow>
      </S.Root>
    </div>
  );
};

export default Header;
