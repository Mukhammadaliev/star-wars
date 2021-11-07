import { HTTP, HTTPS, PARAM_PAGE } from "../Api/Api"

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url
  return result
}

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(PARAM_PAGE)
  const id = url.slice(pos+PARAM_PAGE.length)
  return Number(id);
}

export const getPeopleId = (url) => {
  const id = url.replace('https://swapi.dev/api/people', '')
  .replace(/\//g, '')
  return id
}


export const getPeopleImg = (id) => {
  const img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  return img
}
