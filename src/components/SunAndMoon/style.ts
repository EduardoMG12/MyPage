import styled from 'styled-components'

export const ButtonTheme = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 5rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span{
        &:nth-child(1){//blueMoon
            position: absolute;
            left: 3.8rem;
            transform: translateX(-150%);
            background-color: var(--button-ColorTheme);
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 50%;
            visibility: var(--visibility-ThemeWhite);
        }
        &:nth-child(2){ //blackMoon
            position: absolute;
            bottom: 0.7rem;
            left: 4.3rem;
            transform: var(--transform-positionXMoon) var(--transform-positionYMoon);
            background-color: var(--button-SubColorTheme);
            width: 2.2rem;
            height: 1.8rem;
            border-radius: 50%;
            transition: 0.5s transform ease-in-out;
            visibility: var(--visibility-ThemeWhite);
        }
        &:nth-child(3){
            position: absolute;
            transform: translateX(-65%);
            background-color: var(--button-ColorTheme);
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            transition: 0.3s all linear;
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(4){
            position: absolute;
            right: 1.9rem;
            transform: rotate(90deg);
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;          
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(5){
            position: absolute;
            right: 5.3rem;
            transform: rotate(90deg);
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(6){
            position: absolute;
            top: 1.6rem;
            right: 2.3rem;
            transform: rotate(-45deg);
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(7){
            position: absolute;
            bottom: 1.7rem;
            right: 4.8rem;
            transform: rotate(-45deg);
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(9){
            position: absolute;
            bottom: 1.7rem;
            right: 2.4rem;
            transform: rotate(45deg);
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(10){
            position: absolute;
            top: 1.6rem;
            right: 4.9rem;
            transform: rotate(45deg);
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(11){
            position: absolute;
            top: 2.2rem;
            right: 3.5rem; 
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        &:nth-child(12){
            position: absolute;
            bottom: 2.2rem;
            right: 3.5rem; 
            background-color: var(--button-SubColorTheme);
            width: 0.4rem;
            height: var(--height-sun);
            border-radius: 20px;
            transition: 0.3s all linear;       
            visibility: var(--visibility-ThemeDark);
        }
        
    }
`;