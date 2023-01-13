import styled from 'styled-components';

export const ContainerCarouselStyle = styled.section`
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: relative;
    padding: 1.5rem;
    height: 90vh;
    width: 100vw;
    overflow-x: hidden;

`;
export const WrapperStyle = styled.div`	    
    overflow-x: hidden;
`;
export const ContainerItemsStyle = styled.div`	    
    overflow-x: auto;
    display: flex;
    width: max-content;

`;

export const Arrow = styled.div`
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 3.5rem;
    
    cursor: pointer;
    opacity: 0.1;
    transition: linear 0.4s all;

     &:hover{
        opacity: 1;
    }

`;
