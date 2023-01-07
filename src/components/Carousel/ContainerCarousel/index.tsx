import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerCarousel } from './style';

type TCCarousel = {
    width?: string,
    height?: string,
    bgColor?: string,
    children: React.ReactNode,
}

const CCarousel: React.FC<TCCarousel> = ({ width, height, bgColor, children }) => {
    return (
        <ContainerCarousel style={{ width: `${width ?? '100%'}`, height: `${height ?? '100vh'}`, backgroundColor: `${bgColor ?? ''}` }}>
            <div className='arrow left' style={{ height: `${height ?? '100vh'}` }}>
                <div>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
            </div>
            {children}
            <div className='arrow right' style={{ height: `${height ?? '100vh'}` }}>
                <div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </ContainerCarousel >
    )
};

export default CCarousel;