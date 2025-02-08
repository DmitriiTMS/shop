import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BreadAndPastriesPages, ConfectioneryPage, Layout, MainPage, NotFoundPage } from "./utils/pages"


export const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/breadandpastries" element={<BreadAndPastriesPages />} />
            <Route path="/confectionery" element={<ConfectioneryPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

