import { silkScreen } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header className='flex justify-between items-center px-8 border-b mb-4'>
      <Link href={'/'} className={`${silkScreen.className} text-4xl font-bold text-center p-4`}>
        Billio
      </Link>
      <div className='flex items-center justify-center gap-6'>
        <SignedOut>
          <SignInButton mode='modal'>
            <Button variant='default'>
              Get Started
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href={'/receipts'}>
            <Button variant='default'>
              My Receipts
            </Button>
          </Link>
          <Link href={'/plan'}>
            <Button variant='default'>
              Manage Plan
            </Button>
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </header >
  )
}

export default Header;