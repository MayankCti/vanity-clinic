import Dashboard from "../pages";



export const pageRoutes = {
  dashboard: "/",
};

export const AllRoutes = [
  {
    name: "Dashboard",
    path: pageRoutes.dashboard,
    element: <Dashboard />,
    isPrivate: false,
  },
];
