import styled from "styled-components";
import { IItemCarousel } from "./index";


export const CardItemCarousel = styled.div<IItemCarousel>`
    background-color: var(${props => props.bgColor ?? ''});
    width: ${(props) => props.widthHeight ?? '60rem'};
    height: ${(props) => props.widthHeight ?? '75rem'};
    border-radius: 4rem;
    text-align: center;
    flex-shrink: 0;
`;

export const Image = styled.div<IItemCarousel>`
    background-image: url(${(props) => props.bgImage?.length > 1 ? props.bgImage : 'https //source.unsplash.com/random/300x300px?developer'});
    min-width:100%;
    height: 50%;
    border-radius: 4rem 4rem 1rem 1rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Content = styled.div<IItemCarousel>`


    
    & .tittleContent{

    }
    & .tittleTools{

    }
    & .toolsProjects{

    }


`;