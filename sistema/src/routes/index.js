import { Routes } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'

export default function Router () {
    return (
        <Routes>
            <Route exact path= "/" component= {SignIn} />
            <Route exact path= "/register" component= {SignUp} />

            <Route exact path= "/dashboard" component= {Dashboard} isPrivate/>
        </Routes>
    )
}
