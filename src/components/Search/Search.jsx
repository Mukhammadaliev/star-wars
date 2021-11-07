import React, { useCallback, useEffect, useMemo, useState } from "react";
import getApiResourcee, { API_URL, SEARCH_URL } from "../../Api/Api";
import withErrorApi from "../../hoc/withErrorApi/WithErrorApi";
import { getPeopleId, getPeopleImg } from "../../utils/network";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import styles from './Search.module.css'


const Search = ({setErrorApi}) => {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchPeople(`${API_URL}people${SEARCH_URL}${value}`)
  }, [value])

  const fetchPeople = async (url) => {
    setLoading(true)
    const data = await getApiResourcee.getAllPeople(url)

    if (data) {
      const peopleList = data.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImg(id)
        return {
          id,
          name,
          img
        }
      })
      setLoading(false)
      setSearchResult(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }




  const onHandleKey = (evt) => {
    setValue(evt.target.value)
  }

  console.log();

  return (
    <div className={styles.container}>
      <input className={styles.input} onChange={onHandleKey} type="text" /> (
        {!loading ? (searchResult &&
          (
            <div className={styles.wrapper}>
            {searchResult.map(item => {
              return <div key={item.name}>
                <Link className={styles.item} to={`/people/${item.id}`}>
                  <img className={styles.img} src={item.img} alt="" />
                  <p className={styles.text}>{item.name}</p>
                </Link>
              </div>
            })}
        </div>
          )
        ) : <Spinner />
        }
    </div>
  )
}

export default withErrorApi(Search);