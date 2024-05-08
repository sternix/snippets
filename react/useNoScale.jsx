import { useEffect } from 'react';

// https://github.com/ShizukuIchi/react-hooks/blob/master/src/useNoScale.js

const useNoScale = () => {
    useEffect(() => {
        let lastTouchEnd = 0;

        const handleTouchStart = e => {
            if (e.touches.length > 1)
                e.preventDefault();
        };

        const handleTouchEnd = e => {
            const now = new Date().getTime();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        };

        document.addEventListener('touchstart', handleTouchStart, {
            passive: false,
        });

        document.addEventListener('touchend', handleTouchEnd, false);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);
};

export default useNoScale;
