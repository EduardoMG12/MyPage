import styled from "styled-components";

export const Footer = styled.div`
height: 3vh;
width: 100%;
position: static;
bottom: 0;
background-color: var(--pages-background);
border-top: 1px solid ${props => props.theme.black || props.theme.light};
& div{
    display: flex;
    align-items: center;
    height: 100%;
    background-color: var(--header-background);
    & h2, a{
        color: var(--pages-color);
    }
}
`;