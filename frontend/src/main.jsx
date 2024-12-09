import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'




import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import ViewPost from './pages/ViewPost.jsx';
import CreatePost from './pages/CreatePost.jsx';
import EditPost from './pages/EditPost.jsx';
import Profile from './components/Profile.jsx';
import Navigation from './components/Navigation.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:( 
    <>
      <Navigation />
      <Home /> 
    </>
    )
  },
  {
    path: "/posts",
    element:( 
    <>
      <Navigation />
      <Posts /> 
    </>
    )
  },
  {
    path: "/view-post",
    element:(<>
      <Navigation />
      <ViewPost /> 
    </>)
  },
  {
    path: "/create-post",
    element:(<>
      <Navigation />
      <CreatePost /> 
    </>)
  },
  {
    path: "/edit-post",
    element:(<>
    <Navigation />
    <EditPost /> 
    </>)
  },
  {
    path: "/profile",
    element:(<>
      <Navigation />
      <Profile /> 
    </>)
  },
])




createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      // audience: import.meta.env.VITE_AUTH0_API_IDENTIFIER,
      // scope: "write:posts"

    }}
  >
    <RouterProvider router={router}/>
  </Auth0Provider>
)


