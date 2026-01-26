interface ArrowButtonsProps {
    className?: string
}

export default function ArrowButtons({ className }: ArrowButtonsProps) {
    return (
        <svg className={className} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
