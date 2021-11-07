import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import { DARK_THEME, DEFAULT_THEME, useTheme } from "../../context/ThemeProvider";
import defaultTheme from './img/droid.svg'
import darkTheme from './img/lightsaber.svg'

const Header = () => {
  const isTheme = useTheme();
  const [icon, setIcon] = useState(defaultTheme)

  useEffect( () => {
    switch (isTheme.theme) {
      case DARK_THEME: setIcon(darkTheme); break;
      case DEFAULT_THEME: setIcon(defaultTheme); break;
      default: setIcon(defaultTheme)
    }
  }, [isTheme])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={icon} alt="Logo" />
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink activeClassName={styles.active} className={styles.link} exact to='/?page=1'>Home</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink activeClassName={styles.active} className={styles.link} to='/people'>People</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink activeClassName={styles.active} className={styles.link} to='/search'>Search</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink activeClassName={styles.active} className={styles.link} to='/theme'>Themes</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;