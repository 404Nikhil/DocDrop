"use client"

import { COLOR_EXTENSION_MAP } from "@/constant"
import { FileType } from "@/typing"
import { ColumnDef } from "@tanstack/react-table"
import { defaultStyles, FileIcon  } from "react-file-icon"
import Link from "next/link"
import prettyBytes from "pretty-bytes"



export const columns: ColumnDef<FileType>[] = [
    {
        accessorKey: "type",
        header: "type",
        cell: ({ renderValue, ...props}) => {
            const type = renderValue() as string;
            const extension = type.split("/")[1];
            return (
               <div className="w-10">
               <FileIcon
               extension = {extension}
               labelColor = {COLOR_EXTENSION_MAP[extension]}
               {...defaultStyles[extension]}
               />
               </div>
            );
        }
      }, 
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Uploaded",
  },   
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props}) => {
        return <span>{prettyBytes(renderValue() as number)}</span>
    }
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props}) => {
     <Link 
     href={renderValue() as string}
     target="_blank"
     className="underline text-blue-300 hover:text-blue-500">
     Download
     </Link>
    }
  },   
]
