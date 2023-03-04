import React from 'react';
import Electronic from './Pages/ElectronicForm.js';
import Toys from './Pages/Toys.js'
import Welcome from './Pages/Welcome.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App(props) {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Welcome/>
    },
    {
      path: "/electronic",
      element: <Electronic/>,
    },
    {
      path: "/toys",
      element: <Toys/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;