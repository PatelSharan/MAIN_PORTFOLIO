"use client"
import React, { useEffect, useState } from 'react'
import ThemeChanger from '../common/ThemeChanger'
import Icons from '../icons/ReactIconsLib'
import DownloadResume from './DownloadResume'

const Navbar = () => {

    const [isShowAsideBar, setIsShowAsideBar] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("Home");


    const navItem = [
        {
            label: "Home",
            href: "#Home"
        },
        {
            label: "About",
            href: "#About"
        },
        {
            label: "Works",
            href: "#Works"
        },
        {
            label: "Contact Me",
            href: "#ContactMe"
        }
    ]

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    useEffect(() => {
        const sections = navItem.map(item => document.querySelector(item.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 } // 70% visible
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section!);
            });
        };
    }, []);


    return (
        <>
            <div className='bg-DWLW text-DWLW text-sm h-[var(--navbar-height)] flex items-center justify-between p-2 sticky top-0'>
                <div className='flex items-center justify-center'>
                    <button
                        className={`md:hidden cursor-pointer transition-all duration-300 ease-in-out ${isShowAsideBar ? "rotate-90" : "rotate-0"}`}
                        onClick={() => {
                            setIsShowAsideBar(!isShowAsideBar)
                        }}>
                        {isShowAsideBar ? (
                            <Icons.Close size={25} />
                        ) : (
                            <Icons.Menu size={25} />
                        )}
                    </button>
                    <div className='text-lg px-3 text-D1L1'>
                        <a
                            href="#Home"
                            className='hover:text-theme-text'
                            onClick={(e) => handleScroll(e, "#Home")}
                        >
                            Sharan Patel
                        </a>
                    </div>
                </div>

                <nav className='flex items-center justify-center gap-3'>
                    <ul className='md:flex space-x-3 hidden'>
                        {navItem?.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className={`btn-D3L3-hover text-D1L1-hover transform duration-300 ease-in-out ${item?.href.replace("#", "") === activeSection ? "text-D1L1" : ""}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden md:flex'>
                        <DownloadResume />
                    </div>
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
                                    className={`text-xl text-D1L1-focus ${item?.href.replace("#", "") === activeSection ? "text-D1L1" : ""}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='px-5 my-3'>
                    <DownloadResume />
                </div>
            </aside>
        </>
    )
}

export default Navbar