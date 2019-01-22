import HomePage from '../components/Pages/HomePage'
import NotFound from '../components/Pages/NotFound'
import Login from '../components/Pages/Autorization/Login'
import SignUp from '../components/Pages/Autorization/SignUp'
import RegisterSuccess from '../components/Pages/RegisterSuccess'
import config from '../config'
const { afterRegStub } = config

const demoRoute = [
    {
        path: '/',
        exact: true,
        private: true,
        name: 'success',
        component: RegisterSuccess
    }
]

const prodRoute = [
    {
        path: '/',
        exact: true,
        private: true,
        name: 'home',
        component: HomePage
    },
]

const current = afterRegStub ? demoRoute : prodRoute

export default [
    {
        path: '/login',
        exact: true,
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        exact: true,
        name: 'register',
        component: SignUp
    },
    ...current,
    {
        path: '/',
        name: 'notfound',
        component: NotFound
    },
]
