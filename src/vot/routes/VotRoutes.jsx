import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';
import { AddCandidatePage, CadidatesPage, ResultsPage, VotePage } from '../pages';

export const VotRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='add-candidate' element={<AddCandidatePage />} />
                <Route path='candidates' element={<CadidatesPage />} />
                <Route path='vote' element={<VotePage />} />
                <Route path='results' element={<ResultsPage />} />

                <Route path='/' element={<Navigate to='/candidates' />} />
            </Routes>
        </>
    )
}
