import React from 'react'
import  {useRoutes} from 'react-router-dom'
import Home from './home/Home'
import Discover from './discover/Discover'
import Services from './services/Services'
import News from './news/News'
import About from './about/About'
import Contact from './contact/Contact'

const MainRouters = () => {
  return (
    useRoutes([
        {
            path:"/",
            element:<Home/> 
        },
        {
            path:"/discover",
            element:<Discover/> 
        },
        {
            path:"/services",
            element:<Services/> 
        },
        {
            path:"/news",
            element:<News/> 
        },
        {
            path:"/about",
            element:<About/> 
        },
        {
            path:"/contact",
            element:<Contact/> 
        },
    ])
  )
}

export default React.memo(MainRouters)