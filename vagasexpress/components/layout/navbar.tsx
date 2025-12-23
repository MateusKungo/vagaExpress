import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <nav className="w-full h-20 flex items-center justify-around py-6 px-4 border-b border-gray-200">
            <span className="text-lg font-bold text-blue-500 ">VagasExpress</span>

            <ul className="flex flex-row gap-2 text-gray-700">
                <Link href="/" className={cn(buttonVariants({variant:"link"}),"ml-6")}>Home</Link>
                <Link href="/sobre" className={cn(buttonVariants({variant:"link"}),"ml-6")}>Sobre</Link>
                <Link href="/vagas" className={cn(buttonVariants({variant:"link"}),"ml-6")}>New Job Openings</Link>
                <Link href="vagas/new" className={cn(buttonVariants({variant:"link"}),"ml-6")}>add Jobs</Link>
                <Link href="/contact" className={cn(buttonVariants({variant:"link"}),"ml-6")}>Contact</Link>
                
            </ul>
            <div className="flex flex-row gap-2">
                <Button className="bg-white text-blue-500 px-4 py-2 rounded   hover:bg-blue-50 cursor-pointer">
                    Sign In
                </Button>
                <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                    Sign Up
                </Button>
            </div>
        </nav>
    );
}