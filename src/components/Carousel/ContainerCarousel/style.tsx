import styled from 'styled-components';

export const ContainerCarousel = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;

//arrows Carousel

    & .arrow{
        width: 3vw;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .left{
        left: 0;
    }
    & .right{
        right: 0;
    }
     & .arrow div{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 10rem;
       & i{
       font-size: 3rem;
       }
    }
    
    
`;
