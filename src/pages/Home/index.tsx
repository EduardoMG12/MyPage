import React, { useEffect, useRef, useState } from 'react'
import { Container, HeroSection, HomeAbout, MyImg, ProjectsContainer } from './style'
import BallonText from '../../components/BallonText'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

    const ballonRef = useRef(null);
    const imgRef = useRef(null);
    useEffect(() => {
        const el = imgRef.current;

        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play resume reverse pause"
            },
            y: -800,
            duration: 1
        })
    }, []
    )
    useEffect(() => {
        const el = ballonRef.current;

        gsap.to(el, {
            scrollTrigger: el,
            y: -800,
            duration: 1
        })
    }, []
    )

    return (
        <Container>
            <HeroSection />
            <HomeAbout>
                <MyImg ref={imgRef} style={{ backgroundImage: randomImage() }} />
                <BallonText ref={ballonRef} style={{ padding: "8rem 6rem" }}>
                    <p> Olá eu sou Charles Eduardo, tenho {years()} anos moro no Paraná. Desde a minha adolescencia sempre gostei/joguei muitos jogos oque acho que pode ter influênciado muito a decisão da área que estou seguindo.</p>
                </BallonText>
            </HomeAbout>
            <ProjectsContainer></ProjectsContainer>
        </Container>
    )
}
