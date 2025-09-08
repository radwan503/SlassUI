import { lazy } from "react";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";


const routes = [
  {
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/ui-blocks",
    layout: MainLayout,
    component: lazy(() => import("../pages/UIBlocks")),
  },
  {
    path: "/block/hero-section",
    layout: MainLayout,
    component: lazy(() => import("../pages/Blocks/HeroSection/HeroSection")),
  },
  {
    path: "/block/feature-section",
    layout: MainLayout,
    component: lazy(() => import("../pages/Blocks/FeatureSection/FeatureSection")),
  },
  {
    path: "/template",
    layout: MainLayout,
    component: lazy(() => import("../pages/Template/Template")),
  },
  
];

export default routes;
