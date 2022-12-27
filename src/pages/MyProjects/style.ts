import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vw;
    background-color: var(--pages-background);
`;
export const Apresentation = styled.div`
    width: 100%;
    height: 55vw;
    background: var(--img-background-projects) no-repeat;
    background-size: cover;
    background-position: 0 -25rem;

`
export const DivTittle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 40rem;
`;

export const Tittle = styled.h2`
    font-family: var( --fontFamily-Sora);
    font-size: 10rem;
    font-weight: 700;
    color: var(--pages-color);
`;
