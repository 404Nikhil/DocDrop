import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
     <div className="flex justify-between flex-col md:flex-row bg-slate-800 md:p-8 md:w-fit w-full items-center">
     <h2 className=" text-xl md:text-2xl font-medium tracking-tight first:mt-0">
      One Stop Solution for all your document needs
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>Easy Cloud Drop</li>
      <li>Time Saver</li>
      <li>Print Support</li>
    </ul>
    <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-2 items-center w-fit md:w-fit mt-4">
        Try it for free!
        <ArrowRight className="h-6 w-6 ml-[10px]" />
        </Link>
    </h2>
    <Image src="/doc.svg" alt="doc svg" width={300} height={300} />
     </div>

    </main>
  );
}
