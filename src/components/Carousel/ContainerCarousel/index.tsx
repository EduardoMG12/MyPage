import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../Card';
import { Arrow, ContainerCarouselStyle, ContainerItemsStyle, WrapperStyle } from './style';

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
    
const Wrapper: React.FC<IContainerCarousel> = ({children }) => {
    return (
        <WrapperStyle>
            {children}
        </WrapperStyle>
    )
    
};

interface IContainerItems {
    children: React.ReactElement<typeof Card>
            
};

    
const ContainerItems: React.FC<IContainerItems> = ({children}) => {
    return (
        <ContainerItemsStyle>
            {children}
        </ContainerItemsStyle>
    )
    
};

interface IArrow extends React.HTMLProps<HTMLElement>{
    className: string
    color: string
}

const ArrowLeft: React.FC<IArrow> = ({className, color}) => {
    return (
        <Arrow style={{left: "0", background: `linear-gradient(to left, transparent 0%, black 200%)`}} >
            <i className={className} style={{color: `${color ?? "white"}`}}></i>
        </Arrow>
    )
    
};

const ArrowRight: React.FC<IArrow> = ({className, color }) => {
    return (
        <Arrow style={{ right: "0", background: `linear-gradient(to right, transparent 0%, black 200%)` }}>
            <i className={className} style={{ color: `${color ?? "white"}`}}></i>
        </Arrow>
    )
    
};

export const ContainerCarousel = {
    Root,
    Wrapper,
    ContainerItems,
    ArrowLeft,
    ArrowRight

};