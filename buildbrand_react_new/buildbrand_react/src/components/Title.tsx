import { ReactNode } from 'react'
import clsx from 'clsx'
import './Title.scss'

interface TitleProps {
    children: ReactNode
    className?: string
}

export default function Title({ children, className }: TitleProps) {
    return (
        <div className={clsx('title', className)}>
            {children}
        </div>
    )
}
