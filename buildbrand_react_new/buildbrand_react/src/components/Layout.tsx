import { Outlet, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import clsx from 'clsx'
import { useTheme } from '@/contexts/ThemeContext'
import Intro from './Intro'
import Scrollbar from './Scrollbar'
import Footer from './Footer'
import './Layout.scss'

export default function Layout() {
    const { theme } = useTheme()
    const location = useLocation()
    const isContactPage = location.pathname === '/contact'

    return (
        <>
            <Helmet>
                <title>BuildBrand - Enthusia 5.0</title>
            </Helmet>
            <div className={clsx(`theme-${theme}`, 'layout', isContactPage && 'contact-layout')}>
                <Intro />
                <Scrollbar />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
