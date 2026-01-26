import clsx from 'clsx'
import './Card.scss'

interface CardProps {
    className?: string
    title: string
    description: string
    index: number
}

export default function Card({ className, title, description, index }: CardProps) {
    return (
        <div
            className={clsx('feature-card', className)}
            style={{ '--index': index } as React.CSSProperties}
        >
            <p className="number">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    )
}
