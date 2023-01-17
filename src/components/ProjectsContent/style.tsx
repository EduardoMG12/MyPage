import styled from "styled-components";

export const Content = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    padding-bottom: 3rem;
    & h1{
        font-size: 3.5rem;
        font-family: var(--fontFamily-Sora);
        color: var(--projects-color-ballons);
    }

    & .project{
        width: 100%;
        height: 60rem;
        background-color: var(--projects-bgd-ballons);
        color: var(--projects-color-ballons);
        border-radius: 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.6s transform ease-in-out;
    
        &:hover{
            transform:scale(1.03)
        }
        &:hover .conditionalComponent{
            pointer-events: all;
            visibility: visible;
            opacity: 1;
        }
        @media (max-width:1250px) {
            flex-direction: column;
            height: 90rem;
        }


        & .imageCard{
            height: 100%;
            width: 40%;
            object-fit: cover;
            border-radius: 6rem 0 0 6rem;
            @media (max-width:1250px) {
                width: 100%;
                height: 100rem;
                border-radius: 6rem 6rem  0 0;
            }
        }


        & .contentProject{
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-between;
            align-items: center;
            height: 90%;
            font-weight: 400;
            & .titleProject{
                font-size: 3.5rem;
                font-family: var(--fontFamily-Sora);
                color:var(--projects-color-ballons);
            }
            & .sinopseLong{
                font-size: 1.8rem;
                color:var(--projects-color-ballons);
                text-align: center;
                font-family: var(--fontFamily-PtSans);
            }
            & .titleLanguages{
                font-size: 2.5rem;
                font-family: var(--fontFamily-Sora);

            }
            & .toolsProject{
                display: flex;
                justify-content: center;
                align-items: flex-end;
                gap: 1rem;
                height: 3rem;
                & li{
                    background-position: center;
                    background-size: cover; 
                    & i{
                        font-size: 5rem;
                    }
                }
            }
           
        
        }
        
        & .conditionalComponent{
            background-color: black;
            width: 6rem;
            height: 100%;
            border-radius: 0 6rem 6rem 0;
            display: flex;
            flex-direction: column;
            pointer-events: none;
            visibility: hidden;
            opacity: 0;
            transition: 0.9s  all ease-in-out;
        
        
            @media (max-width:1250px) {
                background-color: black;
                width: 100%;
                height: 5rem;
                border-radius:0 0 6rem 6rem;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                transition: 0.9s  all ease-in-out;
            }
        }
    }

    @media (max-width:768px) {
        & h1{
            font-size: 3rem;
        }
        & .project{
            & .contentProject{
                & .titleProject{
                    font-size: 3rem;
                    }
                & .sinopseLong{
                    font-size: 1.6rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-height: 20rem;
                    }
                & .titleLanguages{
                    font-size: 2.3rem;
                    }
                & .toolsProject{
                    & li{
                        & i{
                            font-size: 4.5rem;

                        }
                    }
                }  
            }
        
        }
    }
`;

export const ItemHover = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & a{
     flex-direction: column;
    }
    .githubLogo{
        width: 5rem;
        transform: rotate(90deg);
        transition: 0.4s ease-in-out transform;
    }
    .vercelLogo1{
        width: 10rem;
        transform: rotate(90deg);
        transition: 1s ease-in all;
    }
    .vercelLogo2{
        opacity:0;
        visibility: hidden;
        pointer-events: none;
        transition: 1s ease-in all;
        width: 5rem;
    }
    &:hover .githubLogo{
        transform: rotate(0deg);
    }
    &:hover .vercelLogo1{
        transform: rotate(0deg);
        opacity:0;
        visibility: hidden;
        width: 0;

    }
    &:hover .vercelLogo2{
        opacity:1;
        visibility: visible;
        pointer-events: all;
    }

    @media (max-width:1250px) {
        flex-direction: row;
        align-items: center;
        & a{
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
        }
        & .vercelLogo2{
            opacity:0;
            visibility: hidden;
            pointer-events: none;
            transition: 1s ease-in all;
            width: 0rem;
        }
        & .githubLogo{
            transform: rotate(0deg);
            width: 5rem;
            
        }
        .vercelLogo1{
            transform: rotate(0deg);
            width: 10rem;
        }
    }

    @media (max-width:425px) {
        & a{
            & .githubLogo{
                transform: rotate(0deg);
                width: 4rem;
                
            }
            }
    }
`;
