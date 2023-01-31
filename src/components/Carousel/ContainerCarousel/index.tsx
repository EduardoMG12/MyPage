import React, { Children, useEffect, useState } from 'react';
import { Card } from '../../Card';
import { Arrow, ContainerCarouselStyle, ContainerItemsStyle } from './style';

interface IContainerCarousel {
    children: React.ReactNode,
}

const Root: React.FC<IContainerCarousel> = ({ children }) => {
    return (
        <ContainerCarouselStyle>
            {children}
        </ContainerCarouselStyle>
    )
};

interface IContainerItems {
    children: React.ReactElement[]

};


const ContainerItems: React.FC<IContainerItems> = ({ children }) => {
    return (
        <ContainerItemsStyle>
            {children}
        </ContainerItemsStyle>
    )

};

interface IArrow extends React.HTMLProps<HTMLElement> {
    className: string
    color: string
}

const ArrowLeft: React.FC<IArrow> = ({ className, color }) => {
    return (
        <Arrow style={{ left: "0", background: `linear-gradient(to left, transparent 0%, black 200%)` }} >
            <i className={className} style={{ color: `${color ?? "white"}` }}></i>
        </Arrow>
    )

};

const ArrowRight: React.FC<IArrow> = ({ className, color }) => {
    return (
        <Arrow style={{ right: "0", background: `linear-gradient(to right, transparent 0%, black 200%)` }}>
            <i className={className} style={{ color: `${color ?? "white"}` }}></i>
        </Arrow>
    )

};

export const ContainerCarousel = {
    Root,
    ContainerItems,
    ArrowLeft,
    ArrowRight

};