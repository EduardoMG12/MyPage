import React, { useEffect, useState } from 'react'
import { ButtonTheme } from './style'

export default function index() {
    const [storedTheme, setStoredTheme] = useState(String);

    useEffect(() => {
        const storedValue = localStorage.getItem('storedTheme');
        if (storedValue) {
            document.documentElement.className = storedValue;
        }
    }, []);

    const colorTheme = () => {
        document.documentElement.classList.toggle("light");
        console.log(document.documentElement.className)
        if (document.documentElement.className == "light") localStorage.setItem("storedTheme", "light")
        else localStorage.removeItem("storedTheme");
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
