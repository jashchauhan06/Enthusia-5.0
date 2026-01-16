import React, { useState } from 'react';
import './ImageAccordion.css';

// Gallery data with Enthusia events
const galleryItems = [
    {
        id: 1,
        title: 'MOVIE & JAMMING NIGHT',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&fit=crop',
        desc: 'Music, movies & memories'
    },
    {
        id: 2,
        title: 'CELEBRITY & DJ NIGHT',
        imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&fit=crop',
        desc: 'Star-studded performances'
    },
    {
        id: 3,
        title: 'CULTURAL FEST',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&fit=crop',
        desc: 'Celebrating diversity'
    },
    {
        id: 4,
        title: 'TECHFEST',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
        desc: 'Innovation unleashed'
    }
];

// Accordion Item Component
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
    return (
        <div
            className={`accordion-item ${isActive ? 'active' : ''}`}
            onMouseEnter={onMouseEnter}
            onClick={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="accordion-image"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x450/1a1a2e/8b5cf6?text=' + item.title.replace(' ', '+');
                }}
            />
            {/* Dark overlay */}
            <div className="accordion-overlay"></div>

            {/* Caption Text */}
            <div className={`accordion-caption ${isActive ? 'active' : ''}`}>
                <h3 className="accordion-title">{item.title}</h3>
                {isActive && <p className="accordion-desc">{item.desc}</p>}
            </div>
        </div>
    );
};

// Main Image Accordion Component
const ImageAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(3);

    const handleItemHover = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="image-accordion-container">
            <div className="image-accordion">
                {galleryItems.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        item={item}
                        isActive={index === activeIndex}
                        onMouseEnter={() => handleItemHover(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageAccordion;
