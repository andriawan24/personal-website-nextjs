import Breadcrumb from '@/components/Breadcrumb'
import { Strings } from '@/utils/strings'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='px-32'>
       <Breadcrumb title="About Me" />
       <div className="flex flex-row gap-10 items-center py-20">
        <Image className='rounded-2xl' src={'/images/img_profile.webp'} height={550} width={500} alt={Strings.imageProfileAlt} />
        <div className='flex flex-col gap-6'>
          <h3 className='text-3xl font-semibold text-color-text-primary leading-140'>Hello, You can call me Fawwaz</h3>
          <p className='text-2xl font-medium leading-140 text-color-text-secondary'>
            My programming journey started when I was in junior high school.
            I played around with my computer until I decided to enter Vocational High School with a 
            Software Engineering major at SMK Negeri 2 Kota Bandung and ended up as 
            an software engineering student at Universitas Pendidikan Indonesia.
          </p>
          <p className='text-2xl font-medium leading-140 text-color-text-secondary'>
            I`m currently {new Date().getFullYear() - 2002} years old, and I live in Bandung with my lovely parents and younger sister. 
            My daily activities are studying, coding, and working during the workday and weekends. 
            Sometimes, I play a game or watch my favorite movies when I`m bored.
          </p>
        </div>
       </div>
       {/* Section Skills */}
       <h3 className='font-bold text-3xl text-color-text-secondary'>My Skills</h3>
       <div className='flex flex-row flex-wrap gap-6 pt-6 pb-16'>
        <div className='flex flex-col gap-4 justify-center items-center p-6 bg-color-background-card-dark rounded-lg'>
          <Image className='w-14 h-14' src='/images/img_kotlin.png' width={60} height={60} alt={Strings.imageLogoAlt} />
          <h6 className='font-semibold text-2xl text-color-text-primary'>Kotlin</h6>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center p-6 bg-color-background-card-dark rounded-lg'>
          <Image className='w-14 h-14' src='/images/img_kotlin.png' width={60} height={60} alt={Strings.imageLogoAlt} />
          <h6 className='font-semibold text-2xl text-color-text-primary'>Kotlin</h6>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center p-6 bg-color-background-card-dark rounded-lg'>
          <Image className='w-14 h-14' src='/images/img_kotlin.png' width={60} height={60} alt={Strings.imageLogoAlt} />
          <h6 className='font-semibold text-2xl text-color-text-primary'>Kotlin</h6>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center p-6 bg-color-background-card-dark rounded-lg'>
          <Image className='w-14 h-14' src='/images/img_kotlin.png' width={60} height={60} alt={Strings.imageLogoAlt} />
          <h6 className='font-semibold text-2xl text-color-text-primary'>Kotlin</h6>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center p-6 bg-color-background-card-dark rounded-lg'>
          <Image className='w-14 h-14' src='/images/img_kotlin.png' width={60} height={60} alt={Strings.imageLogoAlt} />
          <h6 className='font-semibold text-2xl text-color-text-primary'>Kotlin</h6>
        </div>
       </div>
       {/* Section Experiences */}
       <h3 className='font-bold text-3xl text-color-text-secondary'>My Experiences</h3>
       <div className='flex flex-col pt-6 pb-56'>
          <div className='pb-6'>
            <div className="flex flex-row justify-between items-center">
              <h3 className='text-color-text-primary font-bold text-3xl leading-140'>
                CEO Darurat - Google
              </h3>
              <span className='text-color-text-secondary font-bold leading-140'>2024 - Seterusnya</span>
            </div>
            <p className='mt-4 text-xl leading-140 text-color-text-secondary'>🚀 Key Achievements:</p>
            <ul className='list-disc pl-6 flex flex-col gap-2 mt-2'>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Understanding how to collaborate and manage versioning in Git using GitHub.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
            </ul>
          </div>
          <div className='pb-6'>
            <div className="flex flex-row justify-between items-center">
              <h3 className='text-color-text-primary font-bold text-3xl leading-140'>
                CEO Darurat - Google
              </h3>
              <span className='text-color-text-secondary font-bold leading-140'>2024 - Seterusnya</span>
            </div>
            <p className='mt-4 text-xl leading-140 text-color-text-secondary'>🚀 Key Achievements:</p>
            <ul className='list-disc pl-6 flex flex-col gap-2 mt-2'>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Understanding how to collaborate and manage versioning in Git using GitHub.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
              <li className='text-xl text-color-text-secondary leading-140'>
                Contribute to app development with millions of users accessing every day.
              </li>
            </ul>
          </div>
       </div>
    </div>
  )
}
