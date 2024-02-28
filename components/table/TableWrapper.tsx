"use client"

import { FileType } from "@/typing"
import { Button } from "../ui/button"
import { DataTable } from "./Table"
import { columns } from "./columns"
import { useUser } from "@clerk/nextjs"
import { useState } from "react"
function TableWrapper(
    {skeletonFiles}: {skeletonFiles: FileType[]}
) {
    const { isLoaded, isSignedIn, user } = useUser();
    const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
    const [sort, setSort] = useState<"asc" | "desc">("asc");
  return (
    <div>
        <Button 
        onClick={
            ()=> setSort(sort == "desc" ? "asc" : "desc") }>Sort by {sort == "desc" ? "Newest" : "Oldest"}</Button>
        <DataTable columns={columns} data={skeletonFiles} />
    </div>
  )
}

export default TableWrapper