import {  Crown, Dices } from "lucide-react";
import type { MenuItem } from "../Interface/Menu";

const menuData: MenuItem[] = [
  // {
  //   title: "Home",
  //   icon: <Home size={20} />,
  //   path: "/",
  // },
  // {
  //   title: "Creator",
  //   icon: <Info size={20} />,
  //   path: "https://radwananik.netlify.app/",
  // },
  {
    title: "Hero Banner",
    icon: <Crown size={20} />,
    path: "/block/hero-section",
  },
  {
    title: "Feature",
    icon: <Dices size={20} />,
    path: "/block/feature-section",
  },
  // {
  //   title: "Dashboard",
  //   children: [
  //     { title: "Analytics", path: "/dashboard/analytics" },
  //     { title: "Reporting", path: "/dashboard/reporting" },
  //     { title: "Projects", path: "/dashboard/projects" },
  //   ],
  // },
  // {
  //   title: "E-Commerce",
  //   children: [
  //     { title: "Orders", path: "/ecommerce/orders" },
  //     { title: "Products", path: "/ecommerce/products" },
  //   ],
  // },
];

export default menuData;