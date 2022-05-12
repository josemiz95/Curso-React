import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<HomeScreen />}/>
                        <Route exact path='/login' element={<LoginScreen />}/>
                        <Route exact path='/about' element={<AboutScreen />}/>
                        <Route exact path='/about/you' element={<AboutScreen />}/>

                        {/* Default route: */}
                        <Route path='*' element={<Navigate to={"/"} replace/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
