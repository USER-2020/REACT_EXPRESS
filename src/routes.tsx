

import Icon from "@mui/material/Icon";
import Dashboard from "./backend/adminPanel/Dashboard";
import Home from "./components/HOME/home";
import { BrowserRouter as Router, Route, Switch, Routes, RouteObjectWithRole } from "react-router-dom";

const routes: RouteObjectWithRole[] = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">Home</Icon>,
    route: "/",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    role: 'admin', // Especifica el rol necesario para esta ruta
  },
  {
    type: "collapse",
    name: "Productos Admin",
    key: "productosAdmin",
    icon: <Icon fontSize="small">productos</Icon>,
    route: "/productosAdmin",
    component: <Dashboard />,
    role: 'admin', // Especifica el rol necesario para esta ruta
  },
  {
    type: "collapse",
    name: "Clientes",
    key: "clientesAdmin",
    icon: <Icon fontSize="small">clientes</Icon>,
    route: "/clientesAdmin",
    component: <Dashboard />,
    role: 'admin', // Especifica el rol necesario para esta ruta
  },
  {
    type: "collapse",
    name: "Colecciones Admin",
    key: "coleccionesAdmin",
    icon: <Icon fontSize="small">clientes</Icon>,
    route: "/coleccionesAdmin",
    component: <Dashboard />,
    role: 'admin'
  },
  {
    type: "collapse",
    name: "Ordenes Admin",
    key: "ordenesAdmin",
    icon: <Icon fontSize="small">clientes</Icon>,
    route: "/ordenesAdmin",
    component: <Dashboard />,
    role: 'admin',
  },

  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;