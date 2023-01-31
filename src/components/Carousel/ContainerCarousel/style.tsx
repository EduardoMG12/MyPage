import styled from 'styled-components';

export const ContainerCarouselStyle = styled.section`
    position: relative;
    width: 100vw;
    margin: 0 auto;
`;
export const ContainerItemsStyle = styled.div`	    
padding-inline: 2.5rem;
`;

export const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    
    cursor: pointer;
    opacity: 0.1;
    transition: linear 0.4s all;

     &:hover{
        opacity: 1;
    }
`;
