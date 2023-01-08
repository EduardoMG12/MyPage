import styled from 'styled-components';

export const ContainerCarousel = styled.section`
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: relative;
    padding: 1.5rem;


//arrows Carousel

    & .arrow{
        width: 4rem;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 0.1;
        transition: linear 0.4s all;
    }
    & .arrow:hover{
        opacity: 1;
    }
    & .left{
        z-index: 1;
        left: 0;
        background: linear-gradient(to left, transparent 0%, black 200%);
    }
    & .right{
        z-index: 100;
        right: 0;
         background: linear-gradient(to right, transparent 0%, black 200%);
    }
     & .arrow div{
        color: white;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 10rem;
       & i{
       font-size: 3rem;
       }
    }
    // Content Carousel
    & .containerCarouselContentWrapper{
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar{
        display: none;
        }

    }

    & .containerCarouselContent{
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        align-items: center;
        flex-flow: nowrap;
    }

    & .carouselItem{
     opacity: 0.5;
    }
    & .currentItem{
        opacity: 1;
    }
    
    
`;
