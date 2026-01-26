import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LenisProvider } from './contexts/LenisContext'
import { IntroProvider } from './contexts/IntroContext'
import Layout from './components/Layout'
import { HomePage, ContactPage } from './pages'

function App() {
    return (
        <ThemeProvider>
            <LenisProvider>
                <IntroProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="contact" element={<ContactPage />} />
                        </Route>
                    </Routes>
                </IntroProvider>
            </LenisProvider>
        </ThemeProvider>
    )
}

export default App
