import About from '../components/About'
import Shop from '../components/Shop'
import Home from '../components/Home'
import Contact from '../components/Contact'

export const myRoute=[
    {
        path:'/',
        label:'Weather',
        component: <Home/>
    },
    {
        path:'/about',
        label:'About',
        component:<About/>
    },
    {
        path:'/shop',
        label:'Shop',
        component:<Shop/>
    },
    {
        path:'/contact',
        label:'Contact',
        component:<Contact/>
    },
]