'use client'

import { Strings } from '@/utils/strings'
import { MenuType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menus: MenuType[] = [
  {
    name: Strings.aboutMe,
    url: Strings.linkAboutMe
  },
  {
    name: Strings.blogs,
    url: Strings.linkBlogs
  },
  {
    name: Strings.myProjects,
    url: Strings.linkMyProjects
  }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className='flex flex-row justify-between items-center px-32 py-6'>
      <Link href='/' className='cursor-pointer hover:scale-105 duration-200 transition-all active:scale-100 active:duration-0'>
        <Image src={'/images/img_logo.png'} width={80} height={80} alt={Strings.imageLogoAlt} />
      </Link>
      <ul className='flex flex-row items-center gap-7'>
        {menus.map((menu) => {
          const isActive = pathname == menu.url
          return (
            <li
              className={`${isActive ? 'text-color-text-primary' : 'text-color-text-secondary'} font-medium text-lg transition-opacity duration-200 hover:opacity-90`}
              key={menu.url}
            >
              <a href={menu.url}>
                {menu.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
