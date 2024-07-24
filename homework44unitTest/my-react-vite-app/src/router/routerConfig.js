import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from '../pages/ErrorPage/ErrorPage.jsx';
import { HomePage } from '../pages/Home/Home.jsx';
import { Contact } from '../pages/Contact/Contact.jsx';
import { AboutMe } from '../pages/AboutMe/AboutMe.jsx';

const routerConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'contact',
    element: <Contact />, 
  },
  {
    path: 'about_me',
    element: <AboutMe />, 
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



