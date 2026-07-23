'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface FlowSectionProps {
  className?: string;
  cardClassName?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({ className, cardClassName, style = {}, children, 'aria-label': ariaLabel }) => (
  <motion.section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative w-full px-4 py-3 sm:px-6', className)}
    initial={{ opacity: 0, y: 28, scale: 0.985 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ amount: 0.22, once: false }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
  >
    <TiltCard data-flow-inner className={cx('flow-art-container relative mx-auto flex min-h-[25rem] w-full max-w-6xl flex-col justify-between gap-4 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/35 px-[clamp(1.5rem,4vw,4rem)] py-[clamp(1.5rem,3vw,3rem)] shadow-2xl shadow-black/15 backdrop-blur-sm', cardClassName)} style={style}>
      {children}
    </TiltCard>
  </motion.section>
);

export interface FlowArtProps { children: React.ReactNode; className?: string; id?: string; 'aria-label'?: string; }
const FlowArt: React.FC<FlowArtProps> = ({ children, className, id, 'aria-label': ariaLabel = 'Story scroll' }) => {
  return <main id={id} aria-label={ariaLabel} className={cx('w-full scroll-mt-28 overflow-x-hidden py-8', className)}>{children}</main>;
};

export default FlowArt;
