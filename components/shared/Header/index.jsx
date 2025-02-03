import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { APP_NAME } from '@/lib/constants'
import Menu from './Menu'

function Header() {
    return (
        <div className="w-full border-b">
            <div className="lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <Link href="/" className="flex justify-start items-center">
                        <Image
                            src="/images/logo.svg"
                            alt={`${APP_NAME} logo`}
                            height={48}
                            width={48}
                            priority={true}
                        />
                    </Link>
                </div>
                <div className="flex justify-end items-center">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header