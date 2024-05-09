import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import Image from 'next/image';

type ImagesSliderProps = {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: 'up' | 'down';
};

export const ImagesSlider: React.FC<ImagesSliderProps> = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = 'up',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrevious = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const intervalId = autoplay ? setInterval(handleNext, 5000) : null;
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, handleNext]);

  const slideVariants = {
    initial: { scale: 1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: direction === 'up' ? -100 : 100, opacity: 0, transition: { duration: 1 } }
  };

  return (
    <div className={cn("overflow-hidden h-full w-full relative flex items-center justify-center", className)} style={{ perspective: "1000px" }}>
      {overlay && <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />}
      {children}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="absolute inset-0 "
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};