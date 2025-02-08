import { lazy } from "react";


export const Layout = lazy(() =>
  import("../components/Layout/Layuot").then((module) => ({
    default: module.Layout,
  }))
);

export const MainPage = lazy(() =>
    import("../pages/main-page/main-page").then((module) => ({
      default: module.MainPage,
    }))
  );

  export const BreadAndPastriesPages = lazy(() =>
    import("../pages/breadAndPastries-page/breadAndPastries-page").then((module) => ({
      default: module.BreadAndPastriesPages,
    }))
  );

  export const ConfectioneryPage = lazy(() =>
    import("../pages/confectionery-page/confectionery-page").then((module) => ({
      default: module.ConfectioneryPage,
    }))
  );

  export const NotFoundPage = lazy(() =>
    import("../pages/not-found-page/not-found").then((module) => ({
      default: module.NotFoundPage,
    }))
  );

