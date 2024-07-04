import { useState, useEffect, useCallback } from "react";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";

export default function MainNavigation({ setPage }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
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
    <header className={`${classes.header} ${isVisible ? classes.visible : classes.hidden}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
