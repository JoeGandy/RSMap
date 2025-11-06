import React from 'react';
import styles from '@/styles/osrs-button.module.css';

interface OSRSButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
}

/**
 * Reusable OSRS-style button with authentic world map button styling
 * 
 * Usage:
 * <OSRSButton onClick={handleClick}>
 *   Click Me
 * </OSRSButton>
 */
export default function OSRSButton({ 
  children, 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  title
}: OSRSButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.osrsButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {/* Edge elements */}
      <div className={styles.edgeLeft}></div>
      <div className={styles.edgeRight}></div>
      
      {/* Corner elements */}
      <div className={styles.cornerTopLeft}></div>
      <div className={styles.cornerTopRight}></div>
      <div className={styles.cornerBottomLeft}></div>
      <div className={styles.cornerBottomRight}></div>
      
      {/* Button content */}
      <span className={styles.content}>
        {children}
      </span>
    </button>
  );
}
