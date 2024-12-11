import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import ViewPost from "./pages/ViewPost.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Profile from "./components/Profile.jsx";
import Navigation from "./components/Navigation.jsx";

const MainLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/view-post",
        element: <ViewPost />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/edit-post",
        element: <EditPost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
