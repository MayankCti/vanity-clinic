import Dashboard from "../pages";
import Blogs from "../pages/blogs";
import OurTeams from "../pages/our teams";
import Treatments from "../pages/treatements";
import Testimonials from "../pages/testimonials";
import TreatmentDetail from "../pages/treatements/TreatementDetails";
import BlogDetail from "../pages/blogs/BlogDetail";



export const pageRoutes = {
  dashboard: "/",
  treatments: "/treatments",
  treatmentDetail: "/treatments-detail",
  ourTeams: "/our-teams",
  testimonials: "/testimonials",
  blogs: "/blogs",
  blogDetail: "/blog-detail",
};

export const AllRoutes = [
  {
    name: "Dashboard",
    path: pageRoutes.dashboard,
    element: <Dashboard />,
    isPrivate: false,
  },
  {
    name: "Treatments",
    path: pageRoutes.treatments,
    element: <Treatments />,
    isPrivate: false,
  },
  {
    name: "TreatmentDetail",
    path: pageRoutes.treatmentDetail,
    element: <TreatmentDetail />,
    isPrivate: false,
  },
  {
    name: "OurTeams",
    path: pageRoutes.ourTeams,
    element: <OurTeams />,
    isPrivate: false,
  },
  {
    name: "Testimonials",
    path: pageRoutes.testimonials,
    element: <Testimonials />,
    isPrivate: false,
  },
  {
    name: "Blogs",
    path: pageRoutes.blogs,
    element: <Blogs />,
    isPrivate: false,
  },
  {
    name: "BlogDetail",
    path: pageRoutes.blogDetail,
    element: <BlogDetail />,
    isPrivate: false,
  },
];
