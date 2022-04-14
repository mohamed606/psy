import { Fragment, FunctionComponent } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
