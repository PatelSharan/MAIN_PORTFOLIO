"use client"
import React, { useState } from 'react'
import ThemeChanger from '../common/ThemeChanger'
import Icons from '../icons/ReactIconsLib'

const Navbar = () => {

    const [isShowAsideBar, setIsShowAsideBar] = useState(false);

    const navItem = [
        {
            label: "Home",
            href: "#Home"
        },
        {
            label: "About",
            href: "#About"
        }
    ]

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <div className='bg-DWLW text-DWLW text-sm h-[var(--navbar-height)] flex items-center justify-between md:justify-end p-2 sticky top-0'>
                <div className='md:hidden'>
                    <button
                        className={`cursor-pointer transition-all duration-300 ease-in-out ${isShowAsideBar ? "rotate-90" : "rotate-0"}`}
                        onClick={() => {
                            setIsShowAsideBar(!isShowAsideBar)
                        }}>
                        {isShowAsideBar ? (
                            <Icons.Close size={25} />
                        ) : (
                            <Icons.Menu size={25} />
                        )}
                    </button>
                </div>

                <nav className='flex items-center justify-center gap-3'>
                    <ul className='md:flex space-x-3 hidden'>
                        {navItem?.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="btn-D3L3-hover text-D1L1-hover"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='md:border-l borderColor md:px-3'>
                        <ThemeChanger />
                    </div>
                </nav>
            </div>

            {/* <<===== MAIN = RESPONSIVE NAVBAR */}
            <aside className={`bg-light-website-bgColor/90 dark:bg-dark-website-bgColor/90 backdrop-blur-lg text-DWLW w-screen h-screen z-50 fixed top-[var(--navbar-height)] left-0 transition-all ease-in-out duration-300 ${isShowAsideBar ? "pointer-events-auto opacity-100" : "opacity-0 pointer-events-none"}`}>
                <nav className='p-3 px-5'>
                    <ul className='space-y-3'>
                        {navItem?.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        handleScroll(e, item.href);
                                        setIsShowAsideBar(false);
                                    }}
                                    className='text-xl text-D1L1-focus'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Navbar