import React from 'react';
import styles from '@/styles/osrs-borders.module.css';

interface IronRivetPanelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Reusable component that wraps content with OSRS iron rivet borders
 * 
 * Usage:
 * <IronRivetPanel>
 *   <div>Your content here</div>
 * </IronRivetPanel>
 */
export default function IronRivetPanel({ children, className = '', style }: IronRivetPanelProps) {
  return (
    <div className={`${styles.ironRivetContainer} ${className}`} style={style}>
      {/* Border elements */}
      <div className={styles.borderLeft}></div>
      <div className={styles.borderRight}></div>
      
      {/* Corner elements */}
      <div className={styles.cornerTopLeft}></div>
      <div className={styles.cornerTopRight}></div>
      <div className={styles.cornerBottomLeft}></div>
      <div className={styles.cornerBottomRight}></div>
      
      {/* Content */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
