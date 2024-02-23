import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton, SignInButton, SignedOut  } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
    <Link className="flex items-center space-x-2" href="/">
        <div>
            <Image src="/docdrop.jpeg" alt="DocDrop Logo" width={30} height={30} />
        </div>
      <h1 className="font-bold text-xl">DocDrop</h1>
      </Link>

      <div className='px-5 flex space-x-2 items-center'>
        <UserButton afterSignOutUrl="/"/>
        <SignedOut>
            <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header