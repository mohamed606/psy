import { Fragment, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LanguageVariant } from "typescript";
import { RootState } from "../../store";
import { authActions } from "../../store/auth-slice";
import { notesActions } from "../../store/notes-slice";
import classes from "./MainNavigation.module.css";

interface MainNavigationProps {}

const MainNavigation: FunctionComponent<MainNavigationProps> = () => {
  const isLogedin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userLevel = useSelector((state: RootState) => state.notes.userLevel);
  const dispatch = useDispatch();
  const handleLevelChange = () => {
    dispatch(notesActions.toggleUserLevel());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Psychology Notes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            {isLogedin && (
              <Fragment>
                <label htmlFor="level" className={classes.label}>Level:</label>
                <select className={classes.selector} name="level" id="level" onChange={handleLevelChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                </Fragment>
            )}
          </li>
          <li>
            {isLogedin && (
              <NavLink
                to="/addNote"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Add a note
              </NavLink>
            )}
          </li>
          <li>
            {isLogedin && (
              <NavLink
                to="/login"
                onClick={() => {
                  dispatch(authActions.logout());
                }}
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
