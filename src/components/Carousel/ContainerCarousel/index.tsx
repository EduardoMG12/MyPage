import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerCarousel } from './style';
import ICarousel from '../ItemCarousel'

type ICCarousel = {
    width?: string,
    bgColor?: string,
    children: React.ReactNode,
}

const CCarousel: React.FC<ICCarousel> = ({ width, bgColor, children }) => {
    return (
        <ContainerCarousel style={{ width: `${width ?? '100%'}`, backgroundColor: `${bgColor ?? ''}` }}>
            {children}
        </ContainerCarousel >
    )
};

export default CCarousel;