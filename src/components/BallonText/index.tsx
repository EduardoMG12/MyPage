import React from 'react'
import { BallonContainer } from './style'

interface IProps {
    children?: any;
    style?: React.CSSProperties;
    attributes?: React.HTMLAttributes<HTMLElement>;
}

export default function BallonProject(props: IProps) {
    return (
        <BallonContainer
            style={{ ...props.style }}
            {...props.attributes}>
            {props.children}
        </BallonContainer>
    )
}
