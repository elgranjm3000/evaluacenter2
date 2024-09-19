import { useEffect } from 'react';

const useTouchDrag = (onDragStart, onDragMove, onDragEnd) => {
    useEffect(() => {
        const handleTouchStart = (e) => {
            onDragStart(e.touches[0]);
        };

        const handleTouchMove = (e) => {
            console.log(e.touches[0]);
            onDragMove(e.touches[0]);
        };

        const handleTouchEnd = (e) => {
            onDragEnd(e.changedTouches[0]);
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onDragStart, onDragMove, onDragEnd]);
};

export default useTouchDrag;
