import { Navigate, Route, Routes } from 'react-router-dom';

import { ProfileProvider } from '../contexts/Profile';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Register } from '../pages/Register';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route
                path='/profile'
                element={
                    <ProfileProvider>
                        <Profile />
                    </ProfileProvider>
                }
            />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
};
