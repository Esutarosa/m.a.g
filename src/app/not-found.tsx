"use client"

import styles from './not-found.module.scss'
import { notoJP } from '@/lib/fonts'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const NotFound = () => {
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [])

  return (
    <main className='main'>
      <section className='absolute inset-0 flex items-center justify-center gap-2'>
        <p className={`text-[10rem] ${notoJP.className} ${styles.glitch} opacity-20 select-none`}>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
          <span>誤差</span>
        </p>

        <div className='absolute translate-y-[.75rem] flex flex-col justify-center items-start'>
          <h2 className='h2'>404 | Not Found</h2>
          <p className='text-xs my-1 max-w-[280px]'>
            Could not find the requested resource. You will be redirected to the homepage in ten seconds or click 
            <Link href='/' className='underline ml-1'>here</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound