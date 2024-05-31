import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import("./pages/Home"));
const Wallet = React.lazy(() => import("./pages/Wallet"));

const Routers = () => {
    return (
        <React.Suspense fallback={false}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wallet" element={<Wallet />} />
            </Routes>

        </React.Suspense>

    )
}

export default Routers
