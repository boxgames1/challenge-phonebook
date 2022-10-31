import { ReactNode } from "react";

import * as S from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <S.Root>{children}</S.Root>;
};

export default Layout;
