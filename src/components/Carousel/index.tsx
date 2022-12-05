import React from 'react'
import { Container, CarouselContainer } from './style'
import { motion } from 'framer-motion'
interface ICarousel {
    children: any

}

export default function Carousel(props: ICarousel) {
    return (
        <Container>
            <CarouselContainer>

                {props.children}


            </CarouselContainer>
        </Container>
    )
}
