import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = ({children}) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'></Link>
                </div>
            </div>
            <main className='ml-20 w-full'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar