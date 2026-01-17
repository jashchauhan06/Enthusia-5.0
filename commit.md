first commit 

9 files changed
+1593
-88
lines changed
Search within code
 
‎src/components/Team.css‎
+681
Lines changed: 681 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,681 @@
/* ==========================================
   TEAM SECTION - CYBER/FUTURISTIC THEME
   Complete styling for data-driven team section
========================================== */
/* ==================== SECTION CONTAINER ==================== */
.team-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1rem;
}
.team-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
/* Expanded state - allow internal scrolling */
.team-container--expanded {
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 0.5rem;
    scroll-behavior: smooth;
}
/* Custom scrollbar for expanded view */
.team-container--expanded::-webkit-scrollbar {
    width: 6px;
}
.team-container--expanded::-webkit-scrollbar-track {
    background: rgba(139, 92, 246, 0.1);
    border-radius: 3px;
}
.team-container--expanded::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.4);
    border-radius: 3px;
}
.team-container--expanded::-webkit-scrollbar-thumb:hover {
    background: rgba(139, 92, 246, 0.6);
}
/* Scroll hint indicator */
.team-scroll-hint {
    position: sticky;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.1));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    font-size: 0.75rem;
    color: var(--color-text-muted);
    animation: bounceHint 1.5s infinite;
    z-index: 10;
}
@keyframes bounceHint {
    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(5px);
    }
}
/* ==================== HEADER ==================== */
.team-header {
    text-align: center;
    margin-bottom: 0.5rem;
}
.team-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: 4px;
    color: #fff;
    margin-bottom: 0.75rem;
    text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
}
.team-subtitle {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    color: var(--color-text-muted);
    letter-spacing: 2px;
}
/* ==================== FILTER TABS ==================== */
.team-filters {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    background: rgba(10, 10, 15, 0.8);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 12px;
    padding: 0.5rem;
    backdrop-filter: blur(10px);
}
.team-filter-tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--color-text-muted);
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.team-filter-tab:hover {
    color: #fff;
    background: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.3);
}
.team-filter-tab.active {
    color: #fff;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.2));
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
}
.team-filter-tab__count {
    background: rgba(139, 92, 246, 0.4);
    padding: 0.15rem 0.5rem;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: 600;
}
/* ==================== TEAM GRID ==================== */
.team-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    width: 100%;
}
.team-grid__item {
    animation: fadeInUp 0.5s ease forwards;
    opacity: 0;
    width: 100%;
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* ==================== TEAM CARD ==================== */
.team-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgba(15, 15, 20, 0.9);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.team-card:hover,
.team-card:focus-visible {
    transform: translateY(-5px);
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow:
        0 15px 30px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(139, 92, 246, 0.2);
}
.team-card:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}
/* Highlighted cards (Core committee) */
.team-card--highlighted {
    border-color: rgba(6, 182, 212, 0.4);
    background: linear-gradient(145deg,
            rgba(15, 15, 20, 0.95),
            rgba(6, 182, 212, 0.05));
}
.team-card--highlighted:hover {
    border-color: rgba(6, 182, 212, 0.8);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 40px rgba(6, 182, 212, 0.3);
}
/* Card Image Container */
.team-card__image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background: rgba(20, 20, 30, 0.5);
}
.team-card__skeleton {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
            rgba(30, 30, 40, 0.5) 0%,
            rgba(50, 50, 60, 0.5) 50%,
            rgba(30, 30, 40, 0.5) 100%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
.team-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: all 0.5s ease;
    filter: grayscale(20%);
}
.team-card__image.loaded {
    opacity: 1;
}
.team-card:hover .team-card__image {
    transform: scale(1.08);
    filter: grayscale(0%);
}
.team-card__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
            rgba(10, 10, 15, 0.9) 0%,
            rgba(10, 10, 15, 0.3) 40%,
            transparent 100%);
    pointer-events: none;
}
/* Core badge */
.team-card__badge {
    position: absolute;
    top: 0.35rem;
    right: 0.35rem;
    padding: 0.15rem 0.35rem;
    font-size: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #000;
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(6, 182, 212, 0.5);
}
/* Card Info */
.team-card__info {
    padding: 0.5rem;
    text-align: center;
    background: rgba(10, 10, 15, 0.95);
}
.team-card__name {
    font-family: var(--font-heading);
    font-size: 0.7rem;
    letter-spacing: 0.5px;
    color: #fff;
    margin: 0 0 0.15rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.team-card__role {
    font-size: 0.55rem;
    color: var(--color-accent);
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* Glow effect on hover */
.team-card__glow {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at center,
            rgba(139, 92, 246, 0.15) 0%,
            transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}
.team-card:hover .team-card__glow {
    opacity: 1;
}
.team-card--highlighted .team-card__glow {
    background: radial-gradient(circle at center,
            rgba(6, 182, 212, 0.15) 0%,
            transparent 50%);
}
/* ==================== SHOW MORE BUTTON ==================== */
.team-show-more {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
.team-show-more__btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.1));
    border: 1px solid rgba(139, 92, 246, 0.4);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.team-show-more__btn:hover {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.2));
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
    transform: translateY(-2px);
}
.team-show-more__btn svg {
    transition: transform 0.3s ease;
}
.team-show-more__btn:hover svg {
    transform: translateY(2px);
}
.team-show-more__btn[aria-expanded="true"]:hover svg {
    transform: translateY(-2px);
}
/* ==================== MEMBER COUNTER ==================== */
.team-counter {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    letter-spacing: 1px;
    opacity: 0.7;
}
/* ==================== MODAL ==================== */
.team-modal__backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.team-modal {
    position: relative;
    width: 100%;
    max-width: 500px;
    background: linear-gradient(145deg,
            rgba(20, 20, 30, 0.98),
            rgba(15, 15, 20, 0.98));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 16px;
    overflow: hidden;
    animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow:
        0 25px 50px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(139, 92, 246, 0.2);
}
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
.team-modal__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
}
.team-modal__close:hover {
    background: rgba(139, 92, 246, 0.3);
    border-color: rgba(139, 92, 246, 0.5);
    transform: rotate(90deg);
}
.team-modal__content {
    display: flex;
    flex-direction: column;
}
.team-modal__image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
}
.team-modal__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.team-modal__badge {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #000;
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    border-radius: 6px;
    box-shadow: 0 4px 15px rgba(6, 182, 212, 0.5);
}
.team-modal__details {
    padding: 1.5rem;
    text-align: center;
}
.team-modal__name {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: #fff;
    margin: 0 0 0.5rem 0;
    text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}
.team-modal__role {
    display: block;
    font-size: 0.9rem;
    color: var(--color-accent);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1rem;
}
.team-modal__description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
}
.team-modal__socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.team-modal__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: var(--color-text-muted);
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 50%;
    transition: all 0.3s ease;
}
.team-modal__social-link:hover {
    color: #fff;
    background: rgba(139, 92, 246, 0.3);
    border-color: rgba(139, 92, 246, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);
}
/* ==================== RESPONSIVE DESIGN ==================== */
/* Large tablets and small desktops */
@media (max-width: 1024px) {
    .team-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.875rem;
    }
}
/* Tablets */
@media (max-width: 768px) {
    .team-section {
        padding: 3rem 1rem;
    }
    .team-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
    }
    .team-filters {
        padding: 0.375rem;
    }
    .team-filter-tab {
        padding: 0.5rem 0.875rem;
        font-size: 0.75rem;
    }
    .team-card__info {
        padding: 0.75rem;
    }
    .team-card__name {
        font-size: 0.8rem;
    }
    .team-card__role {
        font-size: 0.65rem;
    }
    .team-modal {
        max-width: 90vw;
    }
    .team-modal__image-container {
        aspect-ratio: 4/3;
    }
}
/* Mobile phones */
@media (max-width: 480px) {
    .team-container {
        gap: 1.5rem;
    }
    .team-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
    .team-filters {
        gap: 0.25rem;
    }
    .team-filter-tab {
        padding: 0.5rem 0.625rem;
        font-size: 0.7rem;
    }
    .team-filter-tab__count {
        display: none;
    }
    .team-card__info {
        padding: 0.5rem;
    }
    .team-card__name {
        font-size: 0.7rem;
    }
    .team-card__role {
        font-size: 0.6rem;
    }
    .team-show-more__btn {
        padding: 0.75rem 1.5rem;
        font-size: 0.8rem;
    }
    .team-modal__backdrop {
        padding: 1rem;
    }
    .team-modal__details {
        padding: 1rem;
    }
    .team-modal__name {
        font-size: 1.25rem;
    }
}
/* Very small screens */
@media (max-width: 360px) {
    .team-grid {
        grid-template-columns: 1fr;
        max-width: 280px;
        margin: 0 auto;
    }
    .team-filter-tab {
        padding: 0.375rem 0.5rem;
        font-size: 0.65rem;
    }
}
‎src/components/TeamCard.jsx‎
+192
Lines changed: 192 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,192 @@
import React, { useState } from 'react';
import { Linkedin, Github, Instagram, X } from 'lucide-react';
/**
 * TeamCard Component
 * A reusable card component for displaying team member information
 * Supports click-to-open modal with detailed information
 */
const TeamCard = ({ member, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };
    return (
        <div
            className={`team-card ${member.isHighlighted ? 'team-card--highlighted' : ''}`}
            onClick={() => onClick(member)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick(member)}
            aria-label={`View details for ${member.name}`}
        >
            {/* Image Container */}
            <div className="team-card__image-container">
                {/* Loading skeleton */}
                {!imageLoaded && (
                    <div className="team-card__skeleton" />
                )}
                {/* Lazy loaded image */}
                <img
                    src={imageError ? '/team/member_placeholder.png' : member.image}
                    alt={member.name}
                    className={`team-card__image ${imageLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
                {/* Gradient overlay */}
                <div className="team-card__overlay" />
                {/* Highlight badge for core members */}
                {member.isHighlighted && (
                    <div className="team-card__badge">CORE</div>
                )}
            </div>
            {/* Info Section */}
            <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
            </div>
            {/* Hover glow effect */}
            <div className="team-card__glow" />
        </div>
    );
};
/**
 * TeamModal Component
 * Modal overlay displaying detailed team member information
 */
export const TeamModal = ({ member, isOpen, onClose }) => {
    if (!isOpen || !member) return null;
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };
    React.useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    return (
        <div
            className="team-modal__backdrop"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="team-modal">
                {/* Close button */}
                <button
                    className="team-modal__close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>
                {/* Modal content */}
                <div className="team-modal__content">
                    {/* Image */}
                    <div className="team-modal__image-container">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="team-modal__image"
                            onError={(e) => {
                                e.target.src = '/team/member_placeholder.png';
                            }}
                        />
                        {member.isHighlighted && (
                            <div className="team-modal__badge">CORE COMMITTEE</div>
                        )}
                    </div>
                    {/* Details */}
                    <div className="team-modal__details">
                        <h2 id="modal-title" className="team-modal__name">
                            {member.name}
                        </h2>
                        <span className="team-modal__role">{member.role}</span>
                        {member.description && (
                            <p className="team-modal__description">
                                {member.description}
                            </p>
                        )}
                        {/* Social Links */}
                        {member.socials && Object.keys(member.socials).length > 0 && (
                            <div className="team-modal__socials">
                                {member.socials.linkedin && (
                                    <a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="team-modal__social-link"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {member.socials.github && (
                                    <a
                                        href={member.socials.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="team-modal__social-link"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                )}
                                {member.socials.instagram && (
                                    <a
                                        href={member.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="team-modal__social-link"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TeamCard;
‎src/components/sections/Team.jsx‎
+253
-87
Lines changed: 253 additions & 87 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,128 +1,294 @@
"use client";


import React, { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react';
import React, { forwardRef, useState, useRef, useImperativeHandle, useMemo, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TeamCard, { TeamModal } from '../TeamCard';
import { teamData, teamCategories } from '../../data/teamData';
import '../Team.css';


const teamMembers = [
// Number of members to show initially (2 full rows of 5)
    { name: "Jash Chauhan", role: "Web Dev Lead", img: "/team/Jash.jpg" },
const INITIAL_DISPLAY_COUNT = 10;
    { name: "Saksham Wadhankar", role: "Developer", img: "/team/saksham.png" },
    { name: "Om Rai", role: "Developer", img: "/team/om.png" },
    { name: "Harsh", role: "Core Team", img: "/team/harsh.png?v=1" },
    { name: "Parth Choudhari", role: "Core Team", img: "/team/parth.jpg" },
    { name: "Member", role: "Core Team", img: "/team/member_placeholder.png" },
    { name: "Sunidhi Haware", role: "SRC President", img: "/team/1.jpg" },
    { name: "Prathamesh", role: "SRC Vice President", img: "/team/prathamesh.png" }
];


/**
 * Team Section Component
 * A fully responsive, data-driven team section with filtering, 
 * show more/less functionality, and modal details
 */
const Team = forwardRef((props, ref) => {
const Team = forwardRef((props, ref) => {
    const sectionRef = useRef(null);
    const sectionRef = useRef(null);
    const memberRefs = useRef([]);
    const containerRef = useRef(null);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const textRef = useRef(null);


    // Logic State
    // State management
    const [activeFilter, setActiveFilter] = useState('all');
    const [showAll, setShowAll] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progress, setProgress] = useState(0);
    const isAnimating = useRef(false);


    const maxRadius = 260; // Reduced to 260 to fix header overlap
    // Internal scroll state for expanded view
    const currentRadius = useRef(0);
    const [internalScrollProgress, setInternalScrollProgress] = useState(0);
    const [canScrollDown, setCanScrollDown] = useState(false);
    const [canScrollUp, setCanScrollUp] = useState(false);


    const updateVisuals = (newProgress, immediate = false) => {
    // Filter team members based on active category
        const targetRadius = newProgress * maxRadius;
    const filteredMembers = useMemo(() => {
        if (activeFilter === 'all') {
            return teamData;
        }
        return teamData.filter(member => member.category === activeFilter);
    }, [activeFilter]);
    // Get members to display (limited or all)
    const displayedMembers = useMemo(() => {
        if (showAll) {
            return filteredMembers;
        }
        return filteredMembers.slice(0, INITIAL_DISPLAY_COUNT);
    }, [filteredMembers, showAll]);


        // Classes
    // Check if there are more members to show
        if (newProgress > 0.1) {
    const hasMoreMembers = filteredMembers.length > INITIAL_DISPLAY_COUNT;
            outerRef.current?.classList.add('active');
            innerRef.current?.classList.add('active');
    // Update scroll state when expanded
        } else {
    const updateScrollState = useCallback(() => {
            outerRef.current?.classList.remove('active');
        if (!containerRef.current || !showAll) {
            innerRef.current?.classList.remove('active');
            setCanScrollDown(false);
            setCanScrollUp(false);
            return;
        }
        }


        if (newProgress > 0.7) {
        const container = containerRef.current;
            textRef.current?.classList.add('visible');
        const scrollTop = container.scrollTop;
        } else {
        const scrollHeight = container.scrollHeight;
            textRef.current?.classList.remove('visible');
        const clientHeight = container.clientHeight;
        // Can scroll down if not at bottom
        setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
        // Can scroll up if not at top
        setCanScrollUp(scrollTop > 10);
        // Calculate internal progress (0 to 1)
        const maxScroll = scrollHeight - clientHeight;
        if (maxScroll > 0) {
            setInternalScrollProgress(scrollTop / maxScroll);
        }
        }
    }, [showAll]);
    // Handle internal scroll when expanded
    useEffect(() => {
        if (!showAll || !containerRef.current) return;
        const container = containerRef.current;
        // Initial state check
        updateScrollState();
        // Listen for scroll events on container
        container.addEventListener('scroll', updateScrollState);
        return () => {
            container.removeEventListener('scroll', updateScrollState);
        };
    }, [showAll, updateScrollState]);


        const duration = immediate ? 0 : 0.6;
    // Handle filter change
    const handleFilterChange = (category) => {
        gsap.to(currentRadius, {
        setActiveFilter(category);
            current: targetRadius,
        setShowAll(false); // Reset to collapsed when changing filters
            duration: duration,
        setInternalScrollProgress(0);
            ease: 'power2.out',
    };
            onUpdate: () => {
                const r = currentRadius.current;
    // Handle card click - open modal
                memberRefs.current.forEach((member, i) => {
    const handleCardClick = (member) => {
                    if (!member) return;
        setSelectedMember(member);
                    const angle = i * (Math.PI / 4); // 8 members -> 45 deg
        setIsModalOpen(true);
                    const x = r * Math.cos(angle);
    };
                    const y = r * Math.sin(angle);
                    member.style.transform = `translate(${x}px, ${y}px)`;
    // Handle modal close
                });
    const handleModalClose = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMember(null), 300);
    };
    // Toggle show all/less
    const toggleShowAll = () => {
        setShowAll(prev => {
            if (!prev) {
                // Expanding - reset scroll
                setInternalScrollProgress(0);
                setTimeout(() => {
                    if (containerRef.current) {
                        containerRef.current.scrollTop = 0;
                        updateScrollState();
                    }
                }, 50);
            }
            }
            return !prev;
        });
        });
    };
    };


    // Scroll the internal container
    const scrollInternal = (direction) => {
        if (!containerRef.current) return false;
        const container = containerRef.current;
        const scrollAmount = 200; // pixels to scroll
        if (direction === 'down' && canScrollDown) {
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            return true;
        } else if (direction === 'up' && canScrollUp) {
            container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
            return true;
        }
        return false;
    };
    // Imperative handle for scroll controller
    useImperativeHandle(ref, () => ({
    useImperativeHandle(ref, () => ({
        next: () => {
        next: () => {
            // If expanded and can scroll down, scroll internally first
            if (showAll && canScrollDown) {
                scrollInternal('down');
                return true; // Consumed the scroll
            }
            // Otherwise, allow section transition
            if (progress >= 1) return false;
            if (progress >= 1) return false;
            // Complete animation in one step
            setProgress(1);
            const newP = 1;
            setProgress(newP);
            updateVisuals(newP);
            return true;
            return true;
        },
        },
        prev: () => {
        prev: () => {
            // If expanded and can scroll up, scroll internally first
            if (showAll && canScrollUp) {
                scrollInternal('up');
                return true; // Consumed the scroll
            }
            // Otherwise, allow section transition
            if (progress <= 0) return false;
            if (progress <= 0) return false;
            // Reverse animation in one step
            setProgress(0);
            const newP = 0;
            setProgress(newP);
            updateVisuals(newP);
            return true;
            return true;
        },
        },
        isFinished: () => progress >= 1,
        isFinished: () => {
        isAtStart: () => progress <= 0,
            // Not finished if expanded and can still scroll down
            if (showAll && canScrollDown) return false;
            return progress >= 1;
        },
        isAtStart: () => {
            // Not at start if expanded and can still scroll up
            if (showAll && canScrollUp) return false;
            return progress <= 0;
        },
        reset: (toStart) => {
        reset: (toStart) => {
            const newP = toStart ? 0 : 1;
            setProgress(toStart ? 0 : 1);
            setProgress(newP);
            if (toStart && containerRef.current) {
            updateVisuals(newP, true);
                containerRef.current.scrollTop = 0;
            }
        },
        },
        type: 'TEAM',
        type: 'TEAM',
        el: sectionRef.current
        el: sectionRef.current
    }));
    }), [showAll, canScrollDown, canScrollUp, progress]);


    return (
    return (
        <section className="team-section section" id="team" ref={sectionRef}>
        <section className="team-section section" id="team" ref={sectionRef}>
            <div className="team-container">
            <div
                <div className="team-circle-outer" id="teamOuter" ref={outerRef}>
                className={`team-container ${showAll ? 'team-container--expanded' : ''}`}
                    <div className="team-circle-inner" id="teamInner" ref={innerRef}>
                ref={containerRef}
                        <div className="team-circle-gradient">
            >
                            <div className="team-circle-content" id="teamContent">
                {/* Header */}
                                {teamMembers.map((m, i) => (
                <div className="team-header">
                                    <div
                    <h2 className="team-title">
                                        key={i}
                        Meet <span className="gradient-text">Our Team</span>
                                        className="team-member"
                    </h2>
                                        ref={el => memberRefs.current[i] = el}
                    <p className="team-subtitle">
                                        data-angle={i * (Math.PI / 4)}
                        The passionate minds building the future.
                                    >
                    </p>
                                        <img src={m.img} alt={m.name} />
                </div>
                                        <div className="member-info">
                                            <span className="member-name">{m.name}</span>
                {/* Filter Tabs */}
                                            <span className="member-role">{m.role}</span>
                <div className="team-filters">
                                        </div>
                    {teamCategories.map((category) => (
                                    </div>
                        <button
                                ))}
                            key={category.key}
                                <div className="team-center-text" id="teamCenterText" ref={textRef}>
                            className={`team-filter-tab ${activeFilter === category.key ? 'active' : ''}`}
                                    <h2>Meet</h2>
                            onClick={() => handleFilterChange(category.key)}
                                    <h2 className="gradient-text">Our Team</h2>
                            aria-pressed={activeFilter === category.key}
                                    <p>The passionate minds building the future.</p>
                        >
                                </div>
                            {category.label}
                            </div>
                            {activeFilter === category.key && (
                                <span className="team-filter-tab__count">
                                    {category.key === 'all'
                                        ? teamData.length
                                        : teamData.filter(m => m.category === category.key).length
                                    }
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                {/* Team Grid */}
                <div className="team-grid">
                    {displayedMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="team-grid__item"
                            style={{
                                animationDelay: `${index * 0.05}s`,
                            }}
                        >
                            <TeamCard
                                member={member}
                                onClick={handleCardClick}
                            />
                        </div>
                        </div>
                    ))}
                </div>
                {/* Show More/Less Button */}
                {hasMoreMembers && (
                    <div className="team-show-more">
                        <button
                            className="team-show-more__btn"
                            onClick={toggleShowAll}
                            aria-expanded={showAll}
                        >
                            {showAll ? (
                                <>
                                    <span>Show Less</span>
                                    <ChevronUp size={20} />
                                </>
                            ) : (
                                <>
                                    <span>Show More ({filteredMembers.length - INITIAL_DISPLAY_COUNT} more)</span>
                                    <ChevronDown size={20} />
                                </>
                            )}
                        </button>
                    </div>
                    </div>
                )}
                {/* Member count indicator */}
                <div className="team-counter">
                    Showing {displayedMembers.length} of {filteredMembers.length} members
                </div>
                </div>
                {/* Scroll indicator when expanded */}
                {showAll && canScrollDown && (
                    <div className="team-scroll-hint">
                        Scroll to see more ↓
                    </div>
                )}
            </div>
            </div>
            {/* Modal */}
            <TeamModal
                member={selectedMember}
                isOpen={isModalOpen}
                onClose={handleModalClose}
            />
        </section>
        </section>
    );
    );
});
});
‎src/components/ui/flip-reveal.tsx‎
+72
Lines changed: 72 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,72 @@
"use client";
import { ComponentProps, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
gsap.registerPlugin(Flip);
type FlipRevealItemProps = {
    flipKey: string;
} & ComponentProps<"div">;
export const FlipRevealItem = ({ flipKey, ...props }: FlipRevealItemProps) => {
    return <div data-flip={flipKey} {...props} />;
};
type FlipRevealProps = {
    keys: string[];
    showClass?: string;
    hideClass?: string;
} & ComponentProps<"div">;
export const FlipReveal = ({ keys, hideClass = "", showClass = "", ...props }: FlipRevealProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const isShow = (key: string | null) => !!key && (keys.includes("all") || keys.includes(key));
    useGSAP(
        () => {
            if (!wrapperRef.current) return;
            const items = gsap.utils.toArray<HTMLDivElement>(["[data-flip]"]);
            const state = Flip.getState(items);
            items.forEach((item) => {
                const key = item.getAttribute("data-flip");
                if (isShow(key)) {
                    item.classList.add(showClass);
                    item.classList.remove(hideClass);
                } else {
                    item.classList.remove(showClass);
                    item.classList.add(hideClass);
                }
            });
            Flip.from(state, {
                duration: 0.6,
                scale: true,
                ease: "power1.inOut",
                stagger: 0.05,
                absolute: true,
                onEnter: (elements) =>
                    gsap.fromTo(
                        elements,
                        { opacity: 0, scale: 0 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                        },
                    ),
                onLeave: (elements) => gsap.to(elements, { opacity: 0, scale: 0, duration: 0.8 }),
            });
        },
        { scope: wrapperRef, dependencies: [keys] },
    );
    return <div {...props} ref={wrapperRef} />;
};
‎src/components/ui/toggle-group.tsx‎
+61
Lines changed: 61 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,61 @@
"use client"
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"
const ToggleGroupContext = React.createContext<
    VariantProps<typeof toggleVariants>
>({
    size: "default",
    variant: "default",
})
const ToggleGroup = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn("flex items-center justify-center gap-1", className)}
        {...props}
    >
        <ToggleGroupContext.Provider value={{ variant, size }}>
            {children}
        </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
))
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
const ToggleGroupItem = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext)
    return (
        <ToggleGroupPrimitive.Item
            ref={ref}
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </ToggleGroupPrimitive.Item>
    )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
export { ToggleGroup, ToggleGroupItem }
‎src/components/ui/toggle.tsx‎
+45
Lines changed: 45 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,45 @@
"use client"
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const toggleVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline:
                    "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-10 px-3",
                sm: "h-9 px-2.5",
                lg: "h-11 px-5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)
const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
    />
))
Toggle.displayName = TogglePrimitive.Root.displayName
export { Toggle, toggleVariants }
‎src/data/teamData.js‎
+270
Lines changed: 270 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,270 @@
// Team Members Data
// Categories: core, webdev, promotions
export const teamData = [
    // ==================== CORE COMMITTEE (6 members) ====================
    {
        id: 1,
        name: "Sunidhi Haware",
        role: "SRC President",
        category: "core",
        image: "/team/1.jpg",
        description: "Leading the Student Representative Council with vision and dedication.",
        isHighlighted: true,
        socials: {
            linkedin: "https://linkedin.com/in/",
            instagram: "https://instagram.com/",
        }
    },
    {
        id: 2,
        name: "Prathamesh",
        role: "SRC Vice President",
        category: "core",
        image: "/team/prathamesh.png",
        description: "Supporting leadership and driving student initiatives forward.",
        isHighlighted: true,
        socials: {
            linkedin: "https://linkedin.com/in/",
            instagram: "https://instagram.com/",
        }
    },
    {
        id: 3,
        name: "Core Member 3",
        role: "Event Head",
        category: "core",
        image: "/team/member_placeholder.png",
        description: "Orchestrating memorable events and experiences.",
        isHighlighted: true,
        socials: {
            linkedin: "https://linkedin.com/in/",
        }
    },
    {
        id: 4,
        name: "Core Member 4",
        role: "Technical Head",
        category: "core",
        image: "/team/member_placeholder.png",
        description: "Overseeing technical operations and innovations.",
        isHighlighted: true,
        socials: {
            linkedin: "https://linkedin.com/in/",
            github: "https://github.com/",
        }
    },
    {
        id: 5,
        name: "Core Member 5",
        role: "Cultural Head",
        category: "core",
        image: "/team/member_placeholder.png",
        description: "Bringing creativity and culture to every event.",
        isHighlighted: true,
        socials: {
            instagram: "https://instagram.com/",
        }
    },
    {
        id: 6,
        name: "Core Member 6",
        role: "Sponsorship Head",
        category: "core",
        image: "/team/member_placeholder.png",
        description: "Building partnerships that power our vision.",
        isHighlighted: true,
        socials: {
            linkedin: "https://linkedin.com/in/",
        }
    },
    // ==================== WEB DEVELOPMENT TEAM (8 members) ====================
    {
        id: 7,
        name: "Jash Chauhan",
        role: "Web Dev Lead",
        category: "webdev",
        image: "/team/Jash.jpg",
        description: "Leading the web development team with expertise in modern technologies.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
            github: "https://github.com/",
            instagram: "https://instagram.com/",
        }
    },
    {
        id: 8,
        name: "Saksham Wadhankar",
        role: "Full Stack Developer",
        category: "webdev",
        image: "/team/saksham.png",
        description: "Building seamless full-stack solutions for the fest.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
            github: "https://github.com/",
        }
    },
    {
        id: 9,
        name: "Om Rai",
        role: "Frontend Developer",
        category: "webdev",
        image: "/team/om.png",
        description: "Crafting beautiful and responsive user interfaces.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
            github: "https://github.com/",
        }
    },
    {
        id: 10,
        name: "WebDev Member 4",
        role: "Backend Developer",
        category: "webdev",
        image: "/team/member_placeholder.png",
        description: "Building robust server-side architectures.",
        isHighlighted: false,
        socials: {
            github: "https://github.com/",
        }
    },
    {
        id: 11,
        name: "WebDev Member 5",
        role: "Frontend Developer",
        category: "webdev",
        image: "/team/member_placeholder.png",
        description: "Creating pixel-perfect designs with code.",
        isHighlighted: false,
        socials: {
            github: "https://github.com/",
        }
    },
    {
        id: 12,
        name: "WebDev Member 6",
        role: "Developer",
        category: "webdev",
        image: "/team/member_placeholder.png",
        description: "Contributing to the digital experience.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
        }
    },
    {
        id: 13,
        name: "WebDev Member 7",
        role: "Developer",
        category: "webdev",
        image: "/team/member_placeholder.png",
        description: "Building features that enhance user experience.",
        isHighlighted: false,
        socials: {
            github: "https://github.com/",
        }
    },
    {
        id: 14,
        name: "WebDev Member 8",
        role: "Junior Developer",
        category: "webdev",
        image: "/team/member_placeholder.png",
        description: "Learning and growing with the team.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
        }
    },
    // ==================== PROMOTIONS TEAM (6 members) ====================
    {
        id: 19,
        name: "Harsh",
        role: "Promotions Lead",
        category: "promotions",
        image: "/team/harsh.png?v=1",
        description: "Driving promotional strategies and outreach.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
            instagram: "https://instagram.com/",
        }
    },
    {
        id: 20,
        name: "Parth Choudhari",
        role: "Social Media Manager",
        category: "promotions",
        image: "/team/parth.jpg",
        description: "Managing our social media presence and engagement.",
        isHighlighted: false,
        socials: {
            instagram: "https://instagram.com/",
            linkedin: "https://linkedin.com/in/",
        }
    },
    {
        id: 21,
        name: "Promo Member 3",
        role: "Content Creator",
        category: "promotions",
        image: "/team/member_placeholder.png",
        description: "Creating engaging content for all platforms.",
        isHighlighted: false,
        socials: {
            instagram: "https://instagram.com/",
        }
    },
    {
        id: 22,
        name: "Promo Member 4",
        role: "Marketing Specialist",
        category: "promotions",
        image: "/team/member_placeholder.png",
        description: "Strategizing marketing campaigns.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
        }
    },
    {
        id: 23,
        name: "Promo Member 5",
        role: "PR Manager",
        category: "promotions",
        image: "/team/member_placeholder.png",
        description: "Managing public relations and media.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
        }
    },
    {
        id: 24,
        name: "Promo Member 6",
        role: "Outreach Coordinator",
        category: "promotions",
        image: "/team/member_placeholder.png",
        description: "Coordinating outreach and partnerships.",
        isHighlighted: false,
        socials: {
            linkedin: "https://linkedin.com/in/",
            instagram: "https://instagram.com/",
        }
    },
];
// Filter categories for the UI
export const teamCategories = [
    { key: "all", label: "All" },
    { key: "core", label: "Core" },
    { key: "webdev", label: "WebDev" },
    { key: "promotions", label: "Promotions" },
];
export default teamData;
‎src/lib/utils.ts‎
+6
Lines changed: 6 additions & 0 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,6 @@
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
‎vite.config.js‎
+13
-1
Lines changed: 13 additions & 1 deletion
Original file line number	Original file line	Diff line number	Diff line change
@@ -1,7 +1,19 @@
import { defineConfig } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig({
export default defineConfig({
  plugins: [react()],
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
})
0 commit comments
Comments
0
 (0)

 second commit


  file changed
+86
-45
lines changed
Search within code
 
‎src/components/sections/Team.jsx‎
+86
-45
Lines changed: 86 additions & 45 deletions
Original file line number	Original file line	Diff line number	Diff line change
@@ -25,10 +25,18 @@ const Team = forwardRef((props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progress, setProgress] = useState(0);


    // Internal scroll state for expanded view
    // Use refs for scroll state to avoid stale closure issues
    const [internalScrollProgress, setInternalScrollProgress] = useState(0);
    const scrollStateRef = useRef({
    const [canScrollDown, setCanScrollDown] = useState(false);
        canScrollDown: false,
    const [canScrollUp, setCanScrollUp] = useState(false);
        canScrollUp: false,
        scrollProgress: 0
    });
    const showAllRef = useRef(false);
    // Keep showAllRef in sync
    useEffect(() => {
        showAllRef.current = showAll;
    }, [showAll]);


    // Filter team members based on active category
    // Filter team members based on active category
    const filteredMembers = useMemo(() => {
    const filteredMembers = useMemo(() => {
@@ -49,53 +57,65 @@ const Team = forwardRef((props, ref) => {
    // Check if there are more members to show
    // Check if there are more members to show
    const hasMoreMembers = filteredMembers.length > INITIAL_DISPLAY_COUNT;
    const hasMoreMembers = filteredMembers.length > INITIAL_DISPLAY_COUNT;


    // Update scroll state when expanded
    // Update scroll state when expanded - using ref to avoid stale closures
    const updateScrollState = useCallback(() => {
    const updateScrollState = useCallback(() => {
        if (!containerRef.current || !showAll) {
        if (!containerRef.current || !showAllRef.current) {
            setCanScrollDown(false);
            scrollStateRef.current = {
            setCanScrollUp(false);
                canScrollDown: false,
                canScrollUp: false,
                scrollProgress: 0
            };
            return;
            return;
        }
        }


        const container = containerRef.current;
        const container = containerRef.current;
        const scrollTop = container.scrollTop;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const clientHeight = container.clientHeight;
        const maxScroll = scrollHeight - clientHeight;


        // Can scroll down if not at bottom
        // Using a small threshold to handle floating point issues
        setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
        const threshold = 5;
        // Can scroll up if not at top
        setCanScrollUp(scrollTop > 10);


        // Calculate internal progress (0 to 1)
        scrollStateRef.current = {
        const maxScroll = scrollHeight - clientHeight;
            canScrollDown: scrollTop < maxScroll - threshold,
        if (maxScroll > 0) {
            canScrollUp: scrollTop > threshold,
            setInternalScrollProgress(scrollTop / maxScroll);
            scrollProgress: maxScroll > 0 ? scrollTop / maxScroll : 0
        }
        };
    }, [showAll]);
    }, []);


    // Handle internal scroll when expanded
    // Handle internal scroll when expanded
    useEffect(() => {
    useEffect(() => {
        if (!showAll || !containerRef.current) return;
        if (!showAll || !containerRef.current) {
            scrollStateRef.current = {
                canScrollDown: false,
                canScrollUp: false,
                scrollProgress: 0
            };
            return;
        }


        const container = containerRef.current;
        const container = containerRef.current;


        // Initial state check
        // Initial state check after a small delay to let content render
        updateScrollState();
        setTimeout(() => updateScrollState(), 100);


        // Listen for scroll events on container
        // Listen for scroll events on container
        container.addEventListener('scroll', updateScrollState);
        const handleScroll = () => {
            updateScrollState();
        };
        container.addEventListener('scroll', handleScroll, { passive: true });


        return () => {
        return () => {
            container.removeEventListener('scroll', updateScrollState);
            container.removeEventListener('scroll', handleScroll);
        };
        };
    }, [showAll, updateScrollState]);
    }, [showAll, updateScrollState, displayedMembers.length]);


    // Handle filter change
    // Handle filter change
    const handleFilterChange = (category) => {
    const handleFilterChange = (category) => {
        setActiveFilter(category);
        setActiveFilter(category);
        setShowAll(false); // Reset to collapsed when changing filters
        setShowAll(false); // Reset to collapsed when changing filters
        setInternalScrollProgress(0);
    };
    };


    // Handle card click - open modal
    // Handle card click - open modal
@@ -114,8 +134,7 @@ const Team = forwardRef((props, ref) => {
    const toggleShowAll = () => {
    const toggleShowAll = () => {
        setShowAll(prev => {
        setShowAll(prev => {
            if (!prev) {
            if (!prev) {
                // Expanding - reset scroll
                // Expanding - reset scroll to top
                setInternalScrollProgress(0);
                setTimeout(() => {
                setTimeout(() => {
                    if (containerRef.current) {
                    if (containerRef.current) {
                        containerRef.current.scrollTop = 0;
                        containerRef.current.scrollTop = 0;
@@ -127,12 +146,25 @@ const Team = forwardRef((props, ref) => {
        });
        });
    };
    };


    // Collapse the expanded view (close Show More)
    const collapseView = useCallback(() => {
        setShowAll(false);
        // Scroll container back to top
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, []);
    // Scroll the internal container
    // Scroll the internal container
    const scrollInternal = (direction) => {
    const scrollInternal = useCallback((direction) => {
        if (!containerRef.current) return false;
        if (!containerRef.current || !showAllRef.current) return false;


        const container = containerRef.current;
        const container = containerRef.current;
        const scrollAmount = 200; // pixels to scroll
        const scrollAmount = 150; // pixels to scroll
        // Re-check current state
        updateScrollState();
        const { canScrollDown, canScrollUp } = scrollStateRef.current;


        if (direction === 'down' && canScrollDown) {
        if (direction === 'down' && canScrollDown) {
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
@@ -143,13 +175,16 @@ const Team = forwardRef((props, ref) => {
        }
        }


        return false;
        return false;
    };
    }, [updateScrollState]);


    // Imperative handle for scroll controller
    // Imperative handle for scroll controller
    useImperativeHandle(ref, () => ({
    useImperativeHandle(ref, () => ({
        next: () => {
        next: () => {
            // Re-check scroll state
            updateScrollState();
            // If expanded and can scroll down, scroll internally first
            // If expanded and can scroll down, scroll internally first
            if (showAll && canScrollDown) {
            if (showAllRef.current && scrollStateRef.current.canScrollDown) {
                scrollInternal('down');
                scrollInternal('down');
                return true; // Consumed the scroll
                return true; // Consumed the scroll
            }
            }
@@ -160,36 +195,49 @@ const Team = forwardRef((props, ref) => {
            return true;
            return true;
        },
        },
        prev: () => {
        prev: () => {
            // Re-check scroll state
            updateScrollState();
            // If expanded and can scroll up, scroll internally first
            // If expanded and can scroll up, scroll internally first
            if (showAll && canScrollUp) {
            if (showAllRef.current && scrollStateRef.current.canScrollUp) {
                scrollInternal('up');
                scrollInternal('up');
                return true; // Consumed the scroll
                return true; // Consumed the scroll
            }
            }


            // If expanded but at the top, COLLAPSE the view instead of transitioning
            if (showAllRef.current && !scrollStateRef.current.canScrollUp) {
                collapseView();
                return true; // Consumed the scroll - collapsed the view
            }
            // Otherwise, allow section transition
            // Otherwise, allow section transition
            if (progress <= 0) return false;
            if (progress <= 0) return false;
            setProgress(0);
            setProgress(0);
            return true;
            return true;
        },
        },
        isFinished: () => {
        isFinished: () => {
            updateScrollState();
            // Not finished if expanded and can still scroll down
            // Not finished if expanded and can still scroll down
            if (showAll && canScrollDown) return false;
            if (showAllRef.current && scrollStateRef.current.canScrollDown) return false;
            return progress >= 1;
            return progress >= 1;
        },
        },
        isAtStart: () => {
        isAtStart: () => {
            // Not at start if expanded and can still scroll up
            updateScrollState();
            if (showAll && canScrollUp) return false;
            // Not at start if expanded (need to collapse first)
            if (showAllRef.current) return false;
            return progress <= 0;
            return progress <= 0;
        },
        },
        reset: (toStart) => {
        reset: (toStart) => {
            setProgress(toStart ? 0 : 1);
            setProgress(toStart ? 0 : 1);
            if (toStart && containerRef.current) {
            setShowAll(false); // Always collapse on reset
            if (containerRef.current) {
                containerRef.current.scrollTop = 0;
                containerRef.current.scrollTop = 0;
            }
            }
            updateScrollState();
        },
        },
        type: 'TEAM',
        type: 'TEAM',
        el: sectionRef.current
        el: sectionRef.current
    }), [showAll, canScrollDown, canScrollUp, progress]);
    }), [progress, scrollInternal, updateScrollState, collapseView]);


    return (
    return (
        <section className="team-section section" id="team" ref={sectionRef}>
        <section className="team-section section" id="team" ref={sectionRef}>
@@ -274,13 +322,6 @@ const Team = forwardRef((props, ref) => {
                <div className="team-counter">
                <div className="team-counter">
                    Showing {displayedMembers.length} of {filteredMembers.length} members
                    Showing {displayedMembers.length} of {filteredMembers.length} members
                </div>
                </div>
                {/* Scroll indicator when expanded */}
                {showAll && canScrollDown && (
                    <div className="team-scroll-hint">
                        Scroll to see more ↓
                    </div>
                )}
            </div>
            </div>


            {/* Modal */}
            {/* Modal */}