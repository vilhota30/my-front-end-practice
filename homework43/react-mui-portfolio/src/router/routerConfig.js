import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from '../pages/ErrorPage/ErrorPage.jsx';
import { HomePage } from '../pages/Home/Home.jsx';
import {Swapi} from '../pages/Swapi/Swapi.jsx';
import { TodoListPage } from '../pages/TodoListPage/TodoListPage.jsx';

const routerConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todolist',
    element: <TodoListPage />, 
  },
  {
    path: '/swapi',
    element: <Swapi />
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

 function AppRouter() {
  return (
    <Router>
      <Routes>
        {routerConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export const router = createBrowserRouter(routerConfig);



