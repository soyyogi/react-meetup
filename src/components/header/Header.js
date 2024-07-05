import { useState, useEffect, useCallback } from "react";

import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../services/routing";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, handleScroll]);

  return (
    <header
      className={`${classes.header} ${
        isVisible ? classes.visible : classes.hidden
      }`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} exact activeClassName={classes.active}>
              All Meetups
            </NavLink>
          </li>

          <li>
            <NavLink to={ROUTES.NEW_MEETUP} activeClassName={classes.active}>
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.FAVORITES} activeClassName={classes.active}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
