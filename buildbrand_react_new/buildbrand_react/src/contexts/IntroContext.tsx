import { createContext, useContext, useState, ReactNode } from 'react'

interface IntroContextType {
    introOut: boolean
    setIntroOut: (value: boolean) => void
}

const IntroContext = createContext<IntroContextType>({ introOut: false, setIntroOut: () => { } })

export function IntroProvider({ children }: { children: ReactNode }) {
    const [introOut, setIntroOut] = useState(false)

    return (
        <IntroContext.Provider value={{ introOut, setIntroOut }}>
            {children}
        </IntroContext.Provider>
    )
}

export function useIntro() {
    const context = useContext(IntroContext)
    return context
}
