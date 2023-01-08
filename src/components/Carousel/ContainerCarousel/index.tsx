import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerCarousel } from './style';

type TCCarousel = {
    maxWidth?: string,
    height?: string,
    bgColor?: string,
    children: React.ReactNode,
}

const CCarousel: React.FC<TCCarousel> = ({ maxWidth, height, bgColor, children }) => {
    const controls = document.querySelectorAll('.controls')
    let currentItem = 0
    const items = document.querySelectorAll('.carouselItem')
    const maxItems = items.length
    console.log(maxItems)
    controls.forEach(control => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains('left')
            const isRight = control.classList.contains('right')

            if (isLeft) {
                currentItem -= 1;

            } else {
                currentItem += 1
            }
            if (currentItem >= maxItems) {
                currentItem = 0
            }
            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }
            console.log(items)
            items.forEach(item => item.classList.remove('currentItem'));

            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            })

            items[currentItem].classList.add('currentItem')
        })
    })

    return (
        <ContainerCarousel style={{ maxWidth: `${maxWidth ?? '100%'}`, height: `${height ?? '70vh'}`, backgroundColor: `${bgColor ?? ''}` }}>
            <div className='arrow left controls' style={{ height: `${height ?? '70vh'}` }}>
                <div>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
            </div>
            <div className='containerCarouselContentWrapper'>
                <div className="containerCarouselContent">
                    {children}
                </div>
            </div>
            <div className='arrow right controls' style={{ height: `${height ?? '70vh'}` }}>
                <div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </ContainerCarousel >
    )
};

export default CCarousel;