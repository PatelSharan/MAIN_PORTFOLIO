"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Icons from '../icons/ReactIconsLib'

const ThemeChanger = () => {

    const { theme, setTheme } = useTheme()

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    else {
        return (
            <div>
                {theme === "dark" ? (
                    <button
                        className='bg-D2L2-hover text-DWLW text-D1L1-hover p-1 rounded-md cursor-pointer'
                        onClick={() => setTheme('light')}
                    >
                        <Icons.Sun size={20} />
                    </button>
                ) : (
                    <button
                        className='bg-D2L2-hover text-DWLW text-D1L1-hover p-1 rounded-md cursor-pointer'
                        onClick={() => setTheme('dark')}>
                        <Icons.Moon size={20} />
                    </button>
                )}
            </div>
        )
    }
}

export default ThemeChanger