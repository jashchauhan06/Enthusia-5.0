import { ReactNode } from 'react'
import './HeroTextIn.scss'

interface HeroTextInProps {
    children: ReactNode
}

export default function HeroTextIn({ children }: HeroTextInProps) {
    return (
        <div className="hero-text-in">
            {children}
        </div>
    )
}
