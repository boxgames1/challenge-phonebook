import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Contacts from "@material-ui/icons/Contacts";
import colors from "../../../theme/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    githubButton: {
      color: "black",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "black",
    },
    title: {
      color: "black",
      textDecoration: "none",
      fontWeight: "bold",
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: colors.bg,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Contacts />
            </IconButton>
            <Typography variant="h2" className={classes.title}>
              <Link className={classes.title} to="/">
                Phone Book App
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
