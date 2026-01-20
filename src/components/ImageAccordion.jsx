import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageAccordion.css';

// Gallery data with Enthusia events and their photos
const galleryItems = [
    {
        id: 1,
        title: 'MOVIE & JAMMING NIGHT',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&fit=crop',
        desc: 'Music, movies & memories',
        photos: [
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&fit=crop',
        ]
    },
    {
        id: 2,
        title: 'CELEBRITY & DJ NIGHT',
        imageUrl: '/images/dj_images/_MG_0364.webp',
        desc: 'Star-studded performances',
        photos: [
            '/images/dj_images/_MG_0364.webp',
            '/images/dj_images/_MG_0398.webp',
            '/images/dj_images/_MG_0400.webp',
            '/images/dj_images/_MG_0406.webp',
            '/images/dj_images/_MG_0411.webp',
            '/images/dj_images/_MG_0439.webp',
            '/images/dj_images/_MG_0451.webp',
            '/images/dj_images/_MG_0502.webp',
        ]
    },
    {
        id: 3,
        title: 'CULTURAL FEST',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&fit=crop',
        desc: 'Celebrating diversity',
        photos: [
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&fit=crop',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&fit=crop',
        ]
    },
    {
        id: 4,
        title: 'TECHFEST',
        imageUrl: '/images/tech_events/1.JPG',
        desc: 'Innovation unleashed',
        photos: [
            '/images/tech_events/1.JPG',
            '/images/tech_events/2.JPG',
            '/images/tech_events/3.JPG',
            '/images/tech_events/4.JPG',
            '/images/tech_events/5.JPG',
            '/images/tech_events/11.JPG',
            '/images/tech_events/22.JPG',
            '/images/tech_events/33.jpg',
            '/images/tech_events/55.jpg',
            '/images/tech_events/66.png',
            '/images/tech_events/77.png',
            '/images/tech_events/88.jpg',
            '/images/tech_events/999.webp',
            '/images/tech_events/9991.webp',
            '/images/tech_events/9992.webp',
            '/images/tech_events/9993.webp',
            '/images/tech_events/99994.webp',
        ]
    }
];

// Gallery Modal Component
const GalleryModal = ({ item, isOpen, onClose }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    if (!isOpen || !item) return null;

    const handleNext = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % item.photos.length);
    };

    const handlePrev = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + item.photos.length) % item.photos.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentPhotoIndex(index);
    };

    return (
        <div className="gallery-modal-backdrop" onClick={onClose}>
            <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="gallery-modal__close" onClick={onClose} aria-label="Close gallery">
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="gallery-modal__header">
                    <h2 className="gallery-modal__title">{item.title}</h2>
                </div>

                {/* Main Image Display */}
                <div className="gallery-modal__main">
                    <button 
                        className="gallery-modal__nav gallery-modal__nav--prev" 
                        onClick={handlePrev}
                        aria-label="Previous photo"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <div className="gallery-modal__image-container">
                        <img
                            src={item.photos[currentPhotoIndex]}
                            alt={`${item.title} - Photo ${currentPhotoIndex + 1}`}
                            className="gallery-modal__image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/1200x800/1a1a2e/8b5cf6?text=Photo+${currentPhotoIndex + 1}`;
                            }}
                        />
                    </div>

                    <button 
                        className="gallery-modal__nav gallery-modal__nav--next" 
                        onClick={handleNext}
                        aria-label="Next photo"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="gallery-modal__thumbnails">
                    {item.photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`gallery-modal__thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img
                                src={photo}
                                alt={`Thumbnail ${index + 1}`}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/150x100/1a1a2e/8b5cf6?text=${index + 1}`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Accordion Item Component
const AccordionItem = ({ item, isActive, onMouseEnter, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className={`accordion-item ${isActive ? 'active' : ''}`}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            {/* Skeleton Loader */}
            {!imageLoaded && (
                <div className="accordion-skeleton"></div>
            )}

            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className={`accordion-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x450/1a1a2e/8b5cf6?text=' + item.title.replace(/ /g, '+');
                    setImageLoaded(true);
                }}
            />
            {/* Dark overlay */}
            <div className="accordion-overlay"></div>

            {/* Caption Text */}
            <div className={`accordion-caption ${isActive ? 'active' : ''}`}>
                <h3 className="accordion-title">{item.title}</h3>
                {isActive && (
                    <>
                        <p className="accordion-desc">{item.desc}</p>
                        <p className="accordion-click-hint">Click to view gallery</p>
                    </>
                )}
            </div>
        </div>
    );
};

// Main Image Accordion Component
const ImageAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleItemHover = (index) => {
        setActiveIndex(index);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedItem(null), 300);
    };

    return (
        <>
            <div className="image-accordion-container">
                <div className="image-accordion">
                    {galleryItems.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isActive={index === activeIndex}
                            onMouseEnter={() => handleItemHover(index)}
                            onClick={() => handleItemClick(item)}
                        />
                    ))}
                </div>
            </div>

            <GalleryModal
                item={selectedItem}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default ImageAccordion;
