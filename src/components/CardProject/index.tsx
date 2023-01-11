import React, { MouseEventHandler } from 'react'
import { Card } from './style'

type ICardProjectProps = {
    children?: any,
    className?: string,
    style?: React.CSSProperties,
    attributes?: React.HTMLAttributes<HTMLDivElement>,
    onclick?: MouseEventHandler
}

const CardProject: React.FC<ICardProjectProps> = ({ children, className, style, attributes, }) => {

    return (
        <Card className={className ?? ''}
            style={{ ...style }}
            {...attributes}
        >
            {children}
        </Card>

    )
}
export default CardProject;