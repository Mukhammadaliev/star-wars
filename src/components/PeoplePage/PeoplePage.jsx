import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Api/Api";
import withErrorApi from "../../hoc/withErrorApi/WithErrorApi";
import Spinner from "../Spinner/Spinner";
import styles from './PeoplePage.module.css'
import { getPeopleImg } from "../../utils/network";

const PeoplePage = ({setErrorApi}) => {
  const [people, setPeople] = useState([]);
  const [peopleName, setPeopleName] = useState('');
  const {id} = useParams();
  const [peopleImg, setPeopleImg] = useState(null);
  const [loadingPer, setLoadingPer] = useState(false)

  const goBack = useNavigate();

  useEffect( () => {
    fetchPeople(`${API_URL}people/${id}`)
  }, [])

  const fetchPeople = async (url) => {
    setLoadingPer(true)
    const people = await axios.get(url)


    if(people) {
      setErrorApi(false)
      setPeople([
        {title: 'Height', data: people.data.height},
        {title: 'Mass', data: people.data.mass},
        {title: 'Skin color', data: people.data.skin_color},
        {title: 'Birth year', data: people.data.birth_day},
        {title: 'Gender', data: people.data.gender}
      ])
      setPeopleName(people.data.name)
      setLoadingPer(false)
      setPeopleImg(getPeopleImg(id))
    } else {
      setErrorApi(true)
    }

  }





  return (
    <div className={styles.wrapper}>

      <button onClick={() => goBack('/')} className={styles.btn}>Go back</button>
      {!loadingPer ? (

        <div className={styles.inner}>
          <h2 className={styles.name}>{peopleName}</h2>
          <div className={styles.box}>
            <img className={styles.img} src={peopleImg} alt="" />

         {people && (
            <ul className={styles.list}>
              {people.map(({ title, data }) => (
                data && (
                  (<li key={title}>
                    <span className={styles.text}>{title} : {data}</span>
                  </li>)
                )
              ))}
            </ul>
         )}
          </div>
        </div>
      ) :
      <Spinner />
      }
    </div>
  )
}

export default withErrorApi(PeoplePage);