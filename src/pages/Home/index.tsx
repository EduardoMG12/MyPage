import React from 'react'
import { Container, HeroSection, HomeAbout, MyImg } from './style'
import BallonText from '../../components/BallonText'
import gsap from 'gsap'

export default function home() {
    const years = () => {
        const dateString = "2002/11/12"
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthValidation = today.getMonth() - birthDate.getMonth();

        if (monthValidation < 0 || (monthValidation === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
    const randomImage = () => {
        const random = Boolean(Math.round(Math.random()));
        return random == true ? "var(--my-image)" : "var(--my-icon)"
    }


    return (
        <Container>
            <HeroSection />
            <HomeAbout>
                <MyImg style={{ backgroundImage: randomImage() }} />
                <BallonText attributes={{ className: "BallonGsap" }} style={{ padding: "8rem 6rem" }}>
                    <p> Olá eu sou Charles Eduardo, tenho {years()} anos moro no Paraná. Desde a minha adolescencia sempre gostei/joguei muitos jogos oque acho que pode ter influênciado muito a decisão da área que estou seguindo.</p>
                </BallonText>
            </HomeAbout>
        </Container>
    )
}
