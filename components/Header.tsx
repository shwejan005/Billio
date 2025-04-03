import { silkScreen } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs'

function Header() {
  return (
    <header className='flex justify-between items-center px-8 text-slate-700 border-b mb-4'>
      <Link href={'/'} className={`${silkScreen.className} text-4xl font-bold text-center p-4`}>
        Billio
      </Link>
      <div className='flex items-center justify-center gap-6'>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <Link href={'/dashboard'}>
            <Button className='bg-slate-700 text-white hover:bg-white hover:text-slate-700 hover:border-slate-700 transition ease-in-out'>
              Get Started
            </Button>
          </Link>
        </SignedIn>
      </div>
    </header >
  )
}

export default Header