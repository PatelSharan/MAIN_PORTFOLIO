import React from 'react'
import Icons from '../icons/ReactIconsLib'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-DWLW text-DWLW min-h-[var(--footer-height)] py-3 flex flex-col space-y-5 text-sm border-t borderColor'>
            <div className='flex items-center justify-between px-2 md:px-4'>
                <div className='flex flex-col md:flex-row space-y-3 md:space-y-0'>
                    <div className='flex items-center justify-start md:justify-center gap-2 md:border-r-2 pr-5'>
                        <div>
                            <Icons.Phone size={17} />
                        </div>
                        <div>
                            +91 - 8780759301
                        </div>
                    </div>
                    <div className='flex items-center justify-start md:justify-center gap-2 md:border-r-2 md:px-5'>
                        <div>
                            <Icons.Mail size={17} />
                        </div>
                        <div>
                            sharanpatel4@gmail.com
                        </div>
                    </div>
                    <div className='flex items-center justify-start md:justify-center gap-2 md:px-5'>
                        <div>
                            <Icons.Location size={17} />
                        </div>
                        <div>
                            Ghatlodia, Ahmedabad
                        </div>
                    </div>

                </div>

                <div className='flex gap-3'>
                    <div className='cursor-pointer text-D1L1-hover'>
                        <Link href={"https://github.com/PatelSharan"} target='blank'>
                            <Icons.Github size={20} />
                        </Link>
                    </div>
                    <div className='cursor-pointer text-D1L1-hover'>
                        <Link href={"https://www.linkedin.com/in/sharan-patel-556348295/"} target='blank'>
                            <Icons.Linkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full text-center'>
                © 2025 Portfolio - @ Sharan Patel
            </div>
        </div>
    )
}

export default Footer