import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,useParams } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import ComplexNavbar from './components/ComplexNavbar.jsx'
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';


import { createContext, useContext, useState } from "react";
import AuthContextProvider from './context/AuthContext.jsx'
import Loading from './components/Loading.jsx'
import UserContextProvider from './context/UserContext.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import FirstLoginForm from './components/FirstLoginForm.jsx'
import UserProfile from './components/UserProfile.jsx'
import FollowingList from './components/FollowingList.jsx'
import FollowerList from './components/FollowerList.jsx'
import AddPost from './components/AddPost.jsx'
import MyPosts from './components/MyPosts.jsx'
import SearchPage from './components/SearchPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
      <ProtectedRoute>
      <ComplexNavbar/>          
        <App />

      </ProtectedRoute>
      </>,
  },
        {
          path: "/firstLogin",
          element:          
            <FirstLoginForm />
          ,
        },
        {
          path: "/setting",
          element: <>
          <ProtectedRoute>
      
            Not yet made
          </ProtectedRoute>
            </>,
        },
        {
          path: "/profile",
          children:
            [
              {
                path:":username",
                element:<>
                <ProtectedRoute>              
                <ComplexNavbar/>
                <Profile />
                </ProtectedRoute>  
                </>

              }
            ]
        },

        {
          path:"/profile/me/following",
          element:<>
          <ComplexNavbar/>
          <FollowingList/>
          </>
        },
        {
          path:"/profile/posts",
          element:<>
          <ComplexNavbar/>
          <MyPosts user="all"/>
          </>
        },
        {
          path:"/profile/me/posts",
          element:<>
          <ComplexNavbar/>
          <MyPosts user="me"/>
          </>
        },
        {
          path:"/profile/:username/following",
          element:<>
          <ComplexNavbar/>
          
          <FollowingList/>
          </>
        },
        {
          path:"/profile/:username/followers",
          element:<>
          <ComplexNavbar/>
          <FollowerList/>          
          </>
        },
        {
          path:"/search",
          element:<>
          <ComplexNavbar/>
          <SearchPage/>          
          </>
        },
      
 

  {
    path: "/register",
    element: <>
    <ProtectedRoute>
      
     <ComplexNavbar/>          
    
    <Register />
    </ProtectedRoute>
    
</>,
  },

  {
    path: "/post",
    element: <>
    <ProtectedRoute>
      <ComplexNavbar/>
     <AddPost/>         
    
    </ProtectedRoute>
    
</>,
  },

  {
    path: "/login",
    element: <>
      <ProtectedRoute>

      <ComplexNavbar/>          
      <Login />
      </ProtectedRoute>
      
</>,
  },
  
  {
    path: "*",
    element: <>
      <PageNotFound />
    </>
  }
]);


createRoot(document.getElementById('root')).render(
  

  <>

    <AuthContextProvider>
      <UserContextProvider>
        
         
          
          <RouterProvider router={router} />
          <ToastContainer />
        
      </UserContextProvider>

    </AuthContextProvider>


  </>
   
)
