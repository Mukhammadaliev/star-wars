import React from "react";
import { DARK_THEME, DEFAULT_THEME, useTheme } from "../../context/ThemeProvider";
import styles from './Theme.module.css'
import defaultThemeImg from './img/falcon.jpg';
import darkThemeImg from './img/dark-side.jpg';

const Theme = () => {

  const isTheme = useTheme();


  return (
    <div>
      <h3 style={{color: '#FFF'}}>Theme</h3>

      <div className={styles.container}>
        <div
          className={styles.item}
          onClick={() => isTheme.change(DEFAULT_THEME)}
        >
          <div className={styles.item__header}>Default</div>
          <img className={styles.item__img} src={defaultThemeImg} alt='Default theme' />
        </div>

        <div
          className={styles.item}
          onClick={() => isTheme.change(DARK_THEME)}
        >
          <div className={styles.item__header}>Dark</div>
          <img className={styles.item__img} src={darkThemeImg} alt='Dark theme' />
        </div>
      </div>
    </div>

  )
}

export default Theme;