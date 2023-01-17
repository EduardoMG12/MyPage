import React from 'react'
import { Hamburguer } from './styled'

interface IHamburguer {
    onClick: () => void
}

const hamburguer: React.FC<IHamburguer> = ({ onClick }) => {

    return (
        <Hamburguer onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </Hamburguer>
    )
}
export default hamburguer