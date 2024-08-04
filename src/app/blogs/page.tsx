'use client'

import IconChevronRight from '@/components/icons/IconChevronRight'
import RecentProjects from '@/components/RecentProjects'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Blogs() {
  const pathname = usePathname()

  return (
    <div className='px-32'>
      <div className='flex flex-col gap-6 py-12'>
        <div className='flex flex-row items-center justify-center'>
          {pathname.split('/').map((path, index) => {
            const lastIndex = index == pathname.split('/').length-1
            return (
              <>
                {!lastIndex && (
                  <>
                    <Link href={`/${path}`} className='hover:opacity-80 transition-all duration-200'>
                      <span className='text-color-text-secondary font-bold'>{path ? path : 'Home'}</span>
                    </Link>
                    <IconChevronRight />
                  </>
                )}
                {lastIndex && (
                  <span className='text-color-text-primary font-bold'>{path ? path : 'Home'}</span>
                )}
              </>
            )
          })}
        </div>
        <h1 className='text-center text-5xl font-bold leading-140 text-color-text-primary'>Blogs</h1>
      </div>
      <div className='flex flex-col gap-12 pt-6 pb-16'>
        <RecentProjects />
        <RecentProjects />
        <RecentProjects />
        <RecentProjects />
      </div>
    </div>
  )
}
