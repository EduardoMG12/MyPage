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


    // const [currentItem, setCurrentItem] = useState<number>(0)

    // const items = document.querySelectorAll('.carouselItem')
    // const maxItems = items.length
    // console.log(maxItems)
    // console.log(currentItem)

    // return (
    //     <ContainerCarousel style={{ maxWidth: `${maxWidth ?? '100%'}`, height: `${height ?? '70vh'}`, backgroundColor: `${bgColor ?? ''}` }}>
    //         <div className='arrow left controls' style={{ height: `${height ?? '70vh'}` }} onClick={() => setCurrentItem(currentItem >= 0 ? currentItem - 1 : maxItems)}>
    //             <div>
    //                 <i className="fa-solid fa-chevron-left"></i>
    //             </div>
    //         </div>
    //         <div className='containerCarouselContentWrapper'>
    //             <div className="containerCarouselContent">
    //                 {children}
    //             </div>
    //         </div>
    //         <div className='arrow right controls' style={{ height: `${height ?? '70vh'}` }} onClick={() => setCurrentItem(currentItem < maxItems ? currentItem + 1 : 0)}>
    //             <div>
    //                 <i className="fa-solid fa-chevron-right"></i>
    //             </div>
    //         </div>
    //     </ContainerCarousel > 

//  controls.forEach(control => {
//         control.addEventListener('click', () => {
//             const isLeft = control.classList.contains('left')
//             const isRight = control.classList.contains('right')

//             if (isLeft) {
//                 currentItem -= 1;

//             } else {
//                 currentItem += 1
//             }
//             if (currentItem >= maxItems) {
//                 currentItem = 0
//             }
//             if (currentItem < 0) {
//                 currentItem = maxItems - 1;
//             }
//             console.log(items)
//             items.forEach(item => item.classList.remove('currentItem'));

//             items[currentItem].scrollIntoView({
//                 inline: "center",
//                 behavior: "smooth"
//             })

//             items[currentItem].classList.add('currentItem')
//         })
//     })