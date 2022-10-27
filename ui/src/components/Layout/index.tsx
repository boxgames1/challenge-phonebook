import { ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import colors from "../../theme/colors";

type LayoutProps = {
  children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      backgroundColor: colors.bg,
    },
  })
);

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Layout;
