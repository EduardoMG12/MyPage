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
    width: 30%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 6rem 0 0 6rem;
    `;

export const ContentProject = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    `;
