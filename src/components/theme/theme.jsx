"use client"
import { Moon, MoonStars, Sun } from "@phosphor-icons/react/dist/ssr"
import {useTheme, systemTheme } from "next-themes"

const Theme = () => {
    const {theme, setTheme} = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    return (
        <div className="transition-all">
            {currentTheme === 'dark' ? (
                <Sun size={40} onClick={() => setTheme('light')}></Sun>
            ) : (
                <MoonStars size={40} onClick={() => setTheme('dark')}></MoonStars>
            )}
            
        </div>
    )
}

export default Theme