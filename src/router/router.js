import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import PeoplePage from "../components/PeoplePage/PeoplePage";
import Person from "../components/Person/Person";
import Search from "../components/Search/Search";
import Theme from "../components/Theme/Theme";

const routerConfig = [
  {
    path: '/',
    exact: 'true',
    component: Home
  },
  {
    path: '/people/:id',
    exact: 'true',
    component: PeoplePage,
  },
  {
    path: '/people/',
    exact: 'true',
    component: Person
  },
  {
    path: '/search',
    exact: 'true',
    component: Search
  },
  {
    path: '/theme',
    exact: 'true',
    component: Theme
  },
  {
    path: '/*',
    exact: 'false',
    component: ErrorPage
  }
]

export default routerConfig;