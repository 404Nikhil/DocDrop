import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton, SignInButton, SignedOut  } from '@clerk/nextjs'
import { ThemeToggler } from './ui/ThemeToggler'

const Header = () => {
  return (
    <header className='flex items-center pt-2 justify-between'>
    <Link className="flex items-center space-x-2" href="/">
        <div>
            <Image src="/docdrop.jpeg" alt="DocDrop Logo" width={30} height={30} />
        </div>
      <h1 className="font-bold text-xl">DocDrop</h1>
      </Link>

      <div className='px-5 flex space-x-4 items-center'>
       <ThemeToggler/>
        <UserButton afterSignOutUrl="/"/>
        <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header