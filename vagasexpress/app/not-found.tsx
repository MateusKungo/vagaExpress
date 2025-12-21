import {buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import notFoundImg from "@/public/undraw_page-not-found_6wni.png"

export default function NotFound() {    
    return(
        <div className="flex min-h-screen items-center justify-center flex-col font-sans align-text-center gap-4 p-4  ">

        <Image src={notFoundImg} alt="" className="w-lg mi-10"  />
           <h2 className="text-2xl font-bold"> Página não encontradas</h2>
           <span className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, molestias. Excepturi impedit, cupiditate, laudantium fugit provident blanditiis ratione <br /> magnam perspiciatis sint autem harum mollitia. Totam excepturi nesciunt nihil architecto odio!</span>
            <Link href="/" className={cn(buttonVariants({variant:"default"}),"mt-4 h-[50PX]  bg-blue-500 text-white  px-4 py-2 rounded hover:bg-blue-600 cursor-pointer")}>
                Voltar para Home
            </Link>
        </div>
    );
}