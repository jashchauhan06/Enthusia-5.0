import { ReactNode, lazy, Suspense } from 'react'
import clsx from 'clsx'
import './Button.scss'

interface ButtonProps {
    children: ReactNode
    className?: string
    icon?: ReactNode
    arrow?: boolean
    href?: string
    onClick?: () => void
    target?: string
    rel?: string
    type?: 'button' | 'submit' | 'reset'
}

const ArrowButtons = lazy(() => import('./Icons/ArrowButtons'))

export default function Button({ children, className, icon, arrow, href, onClick, target, rel, type = 'button' }: ButtonProps) {
    const content = (
        <>
            {icon && <span className="icon">{icon}</span>}
            <span className="text">
                <span className="visible">
                    {children}
                    {arrow && (
                        <Suspense fallback={null}>
                            <ArrowButtons className="arrow" />
                        </Suspense>
                    )}
                </span>
                <span aria-hidden="true" className="hidden">
                    {children}
                    {arrow && (
                        <Suspense fallback={null}>
                            <ArrowButtons className="arrow" />
                        </Suspense>
                    )}
                </span>
            </span>
        </>
    )

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className={clsx('button', className, icon && 'has-icon')}>
                {content}
            </a>
        )
    }

    return (
        <button type={type} onClick={onClick} className={clsx('button', className, icon && 'has-icon')}>
            {content}
        </button>
    )
}
