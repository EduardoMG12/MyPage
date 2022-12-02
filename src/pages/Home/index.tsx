import React, { useEffect, useRef, useState } from 'react'
import { BallonAbout, Container, HeroSection, HomeAbout, MyImg, ProjectsContainer } from './style'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CarouselProjects from '../../components/CarouselProjects';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
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
    const backgroundRef = useRef(null);
    useEffect(() => {
        const el = backgroundRef.current
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reverse reverse resume",
                start: "top top",
                end: "190% top",
                markers: false,
                pin: true,
                pinSpacing: false,
                scrub: 1
            },
            opacity: 0,
            y: 20,
            duration: 0.1
        })
    }, [])
    const imgRef = useRef(null);
    useEffect(() => {
        const el = imgRef.current
        console.log(imgRef)

        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reverse reverse resume",
                start: "400px center", end: "center center",
                markers: false,
                pin: true,
                scrub: 2,
            },
            opacity: 0,
            x: -700,
            y: -700,
            display: 'none',
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
                toggleActions: "play reverse reverse resume",
                start: "400px center",
                end: "center center",
                markers: false,
                pin: true,
                pinSpacing: false,
                scrub: 2,
            },
            opacity: 0,
            x: 700,
            y: -700,
            display: 'none',
            duration: 0.1
        })
    }, [])
    return (
        <Container>
            <HeroSection ref={backgroundRef} />
            <HomeAbout>
                <MyImg ref={imgRef} style={{ backgroundImage: randomImage() }} />
                <BallonAbout ref={ballonRef} style={{ padding: "8rem 6rem" }}>
                    <p> Olá eu sou Charles Eduardo, tenho {years()} anos moro no Paraná. Desde a minha adolescencia sempre gostei/joguei muitos jogos oque acho que pode ter influênciado muito a decisão da área que estou seguindo.</p>
                </BallonAbout>
            </HomeAbout>
            <ProjectsContainer></ProjectsContainer>
            <CarouselProjects></CarouselProjects>
        </Container>
    )
}