import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import './FaqItem.scss'

interface FaqItemProps {
    question: string
    answer: string
    index: number
    visible: boolean
}

export default function FaqItem({ question, answer, index, visible }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    return (
        <div
            className={clsx('faq-item', isOpen && 'open', visible && 'visible')}
            style={{ '--index': index } as React.CSSProperties}
        >
            <button
                className="question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="question-text">{question}</span>
                <span className="icon">
                    <span className="line horizontal" />
                    <span className="line vertical" />
                </span>
            </button>
            <div
                className="answer-wrapper"
                style={{ height: `${height}px` }}
            >
                <div ref={contentRef} className="answer">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
