import React, { useEffect } from 'react';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom'

// components
import HeaderLayout from './components/layouts/HeaderLayout.js';

// pages
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import CookingVille from './pages/Projects/CookingVille.js';
import FabFlix from './pages/Projects/FabFlix.js';
import ErrorPage from './pages/ErrorPage.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/CookingVille' element={<CookingVille />} />
      <Route path='/projects/FabFlix' element={<FabFlix />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  useEffect(() => {
    document.title = "sammypham.com";
  }, []);

  return (
    <div>
      <RouterProvider router={router} />

    </div>
    
  );
}

export default App;
