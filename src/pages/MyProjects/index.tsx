import React, { useEffect, useRef } from 'react'
import { Apresentation, Container, DivTittle, Tittle } from './style'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProjectsContent from "../../components/ProjectsContent"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function () {
    const backgroundProjectRef = useRef(null);
    useEffect(() => {
        const el = backgroundProjectRef.current
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reverse reverse resume",
                start: "top top",
                end: "130% top",
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
    const tittle = useRef(null);
    useEffect(() => {
        const el = tittle.current
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reverse reverse resume",
                start: "200px center",
                end: "center center",
                markers: false,
                pin: true,
                pinSpacing: false,
                scrub: 5,
            },
            opacity: 0,
            y: -300,
            display: 'none',
            duration: 0.1
        })
    }, [])
    return (
        <Container>
            <Apresentation ref={backgroundProjectRef}>
            </Apresentation>
            <DivTittle>
                <Tittle ref={tittle}>Projetos</Tittle>
            </DivTittle>
            <ProjectsContent />
        </Container>
    )
}
