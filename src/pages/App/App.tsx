import React, { Suspense } from 'react'
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// PAGES
import PageWrapper from './PageWrapper';
import Landing from "@pages/Landing/Landing"
import store from '@store/store';
// CSS STYLES
import "@assets/styles/tailwind.css"
import "@assets/styles/addons.css"
import "@assets/styles/main.css"
import Demo from '@pages/Demo/Demo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PageWrapper />}>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
      </Route>
    </>))

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}

export default App