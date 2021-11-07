import React from "react";
import { Link } from "react-router-dom";
import styles from './HomePageNav.module.css';

const HomePageNav = ({ fetchPeople, prevPage, nextPage, counterPage}) => {

  const handleChangeNext = () => {
    fetchPeople(nextPage)
  }
  const handleChangePrev = () => {
    fetchPeople(prevPage)
  }

  return (
    <div className={styles.wrapper}>
      <Link to={`/?page=${counterPage - 1}`}> <button disabled={!prevPage} onClick={handleChangePrev} className={styles.btn}>Previous</button> </Link>
      <Link to={`/?page=${counterPage + 1}`} > <button disabled={!nextPage} onClick={handleChangeNext} className={styles.btn}> Next </button> </Link>
    </div>
  )
}

export default HomePageNav