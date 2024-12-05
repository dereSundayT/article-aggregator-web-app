import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes,dashboardRoutes} from "./config/routes";

export const App:React.FC = ()=> {
  return (

        <Routes>
            {
                authRoutes.map((i,j=0) => {
                    return <Route key={j} path={i.url} element={i.component} />
                })

            }

            {
                dashboardRoutes.map((i,j=0) => {
                    return <Route key={j} path={i.url} element={i.component} />
                })

            }
        </Routes>
  );
}

export default App;
