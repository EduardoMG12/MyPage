import React from 'react'
import { ButtonTheme } from './style'

export default function index() {
    const colorTheme = () => {
        document.documentElement.classList.toggle("light")
    }
    return (
        <ButtonTheme onClick={colorTheme}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </ButtonTheme>
    )
}
