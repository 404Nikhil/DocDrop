import React from 'react'
import { auth } from '@clerk/nextjs'
import Dropzone from '@/components/Dropzone';


const dashboard = () => {
  const {userId} = auth();
  return (
    <div><Dropzone/></div>
  )
}

export default dashboard