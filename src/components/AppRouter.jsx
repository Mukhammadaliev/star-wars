import React from 'react';
import { Route, Routes } from 'react-router';
import routerConfig from '../router/router';


const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(route => {
        return <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>} />
      })}
    </Routes>
  )
}


export default AppRouter;