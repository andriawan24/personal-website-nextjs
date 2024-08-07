'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import IconChevronRight from './icons/IconChevronRight'
import { capitalize } from '@/utils/helper'

export default function Breadcrumb({ title }: { title: String }) {
  const pathname = usePathname()

  return (
    <div className='flex flex-col gap-6 py-12'>
        <div className='flex flex-row items-center justify-center'>
          {pathname.split('/').map((path, index) => {
            const lastIndex = index == pathname.split('/').length-1
            return (
              <>
                {!lastIndex && (
                  <>
                    <Link href={`/${path}`} className='hover:opacity-80 transition-all duration-200'>
                      <span className='text-color-text-secondary font-bold'>{path ? capitalize(path) : 'Home'}</span>
                    </Link>
                    <IconChevronRight />
                  </>
                )}
                {lastIndex && (
                  <span className='text-color-text-primary font-bold'>{path ? capitalize(path) : 'Home'}</span>
                )}
              </>
            )
          })}
        </div>
        <h1 className='text-center text-5xl font-bold leading-140 text-color-text-primary'>{title}</h1>
      </div>
  )
}
