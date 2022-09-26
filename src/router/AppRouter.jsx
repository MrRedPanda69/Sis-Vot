import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoginPage } from '../auth';
import { VotRoutes } from '../vot';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<VotRoutes />} />
            </Routes>
        </>
    )
}
