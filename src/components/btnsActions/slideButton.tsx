import React, { useState } from 'react';

const SlidingButton = () => {
    const [isSlidingComplete, setSlidingComplete] = useState(false);
    const [positionX, setPositionX] = useState(0);

    const handleSlideStart = () => {
        setSlidingComplete(false);
    };

    const handleSlide = (e) => {
        const containerWidth = e.currentTarget.offsetWidth;
        const slideProgress = (e.clientX / containerWidth).toFixed(2);

        if (slideProgress >= 1) {
            setSlidingComplete(true);
            console.log('Deslizamiento completado');
        } else {
            setSlidingComplete(false);
        }

        setPositionX(Math.min(e.clientX, containerWidth)); // Limita a 100vw
    };

    return (
        <div>
            <div
                style={{
                    width: '200px',
                    height: '50px',
                    backgroundColor: isSlidingComplete ? 'green' : 'blue',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    transform: `translateX(${positionX}px)`,
                }}
                onMouseDown={handleSlideStart}
                onMouseMove={handleSlide}
            >
                <span>Desliza aquí</span>
            </div>
        </div>
    );
};

export default SlidingButton;
