import React, { useEffect, useState } from "react";
import getApiResourcee, { GET_API } from "../../Api/Api";
import { changeHTTP, getPeopleId, getPeopleImg, getPeoplePageId } from "../../utils/network";
import withErrorApi from "../../hoc/withErrorApi/WithErrorApi";
import People from "../People/People";
import styles from './Home.module.css'
import Spinner from "../Spinner/Spinner";
import { useQueryParams } from "../../hooks/useQueryParams";
import HomePageNav from "../HomePageNav/HomePageNav";

const Home = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [counterPage, setCounterPage] = useState(1)
  const query = useQueryParams();
  const queryPage = query.get('page')


  useEffect(() => {
    fetchPeople(`${GET_API}${queryPage}`)
  }, [queryPage])

  const fetchPeople = async (url) => {
    setIsLoading(true)
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
      setIsLoading(false)
      setPeople(peopleList)
      setNextPage(changeHTTP(data.next))
      setPrevPage(changeHTTP(data.previous))
      setCounterPage(getPeoplePageId(url))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }


  return (
    <div className='container'>
      <HomePageNav fetchPeople={fetchPeople} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage}/>
      {!isLoading ? (<ul className={styles.list}>
        {people.map(item => {
          return <People key={item.id} {...item} />
        })}
      </ul>) :
        <Spinner />
      }
    </div>
  )
}

export default withErrorApi(Home);