import React, { Suspense } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// PAGES
import PageWrapper from './PageWrapper';
import Landing from "@pages/Landing/Landing"

// CSS STYLES
import "@assets/styles/tailwind.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PageWrapper/>}>
        <Route path="/" element={<Landing />} />
      </Route>
    </>))

function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App