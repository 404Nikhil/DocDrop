import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-betweem">
    <Link href="/">
      <h1 className="font text-xl">Drop File</h1>
      </Link>
    </header>
  )
}

export default Header