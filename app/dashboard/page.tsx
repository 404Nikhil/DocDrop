import React from 'react'
import { auth } from '@clerk/nextjs'
import Dropzone from '@/components/Dropzone';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db, storage } from '@/firebase';
import { FileType } from '@/typing';
import TableWrapper from '@/components/table/TableWrapper';
async function Dashboard() {
  const { userId } = auth();
  const docResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp:
      doc.data().timestamp?.seconds !== undefined
        ? new Date(doc.data().timestamp.seconds * 1000).toISOString() // Converted to ISO string
        : "",
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));
  return (
    <div className='border-t'><Dropzone/>
    <section className='container space-y-5 '>
      <h2 className='font-bold'>All Files</h2>

      <div>
      <TableWrapper skeletonFiles={skeletonFiles} />
      </div>
    </section>
    </div>
  )
}

export default Dashboard