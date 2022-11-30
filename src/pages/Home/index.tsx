import React, { useEffect, useRef, useState } from 'react'
import { BallonAbout, Container, HeroSection, HomeAbout, MyImg, ProjectsContainer } from './style'
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

    const imgRef = useRef(null);
    useEffect(() => {
        const el = imgRef.current
        console.log(imgRef)
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play rever reverse reverse",
                start: "-50px 90%",
                end: "-=80",
                markers: true,
                scrub: true
            },
            y: -1000,
            duration: 0.1
        })
    }, [])
    const ballonRef = useRef(null);
    useEffect(() => {
        const el = ballonRef.current
        console.log(imgRef)
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play resume resume reverse",
                start: "-50px 90%",
                end: "-=80",
                markers: true,
                scrub: true
            },
            y: -600,
            duration: 0.1
        })
    }, [])

    return (
        <Container>
            <HeroSection />
            <HomeAbout>
                <MyImg ref={imgRef} style={{ backgroundImage: randomImage() }} />
                <BallonAbout ref={ballonRef} style={{ padding: "8rem 6rem" }}>
                    <p> Olá eu sou Charles Eduardo, tenho {years()} anos moro no Paraná. Desde a minha adolescencia sempre gostei/joguei muitos jogos oque acho que pode ter influênciado muito a decisão da área que estou seguindo.</p>
                </BallonAbout>
            </HomeAbout>
            <ProjectsContainer></ProjectsContainer>
        </Container>
    )
}
