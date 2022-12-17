import styled from "styled-components";

export const Content = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
`;

export const Project = styled.div`
    width: 100%;
    height: 60rem;
    background-color: var(--projects-bgd-ballons);
    color: var(--projects-color-ballons);
    border-radius: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.div`
    height: 100%;
    width: 40%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 6rem 0 0 6rem;
    `;

export const ContentProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    & h2{
    font-size: 3.5rem;
    color:var(--projects-color-ballons);
    }
    & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    li{
        background-position: center;
        background-size: cover;
    }
    }
    `;

export const CodeAndDeploy = styled.div`
    background-color: black;
    width: 6rem;
    height: 100%;
    border-radius: 0 6rem 6rem 0;
`;

export const ItemHover = styled.div`
`;