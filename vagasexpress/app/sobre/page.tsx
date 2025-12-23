import Image from "next/image";
import imageabout from "@/public/undraw_team-page_q5am.png"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";


export default function Sobre() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-5xl h-screen flex flex-col items-center  px-4">
             <div>
                   <Image src={imageabout} width={500} height={400} alt="imagem sobre nós" className="mx-auto" />
             </div>
                <h2 className="text-center font-bold text-2xl"> About VagasExpress</h2>
                <p className="text-center text-gray-500">VagasExpress is a cutting-edge job portal designed to connect job
                    seekers with their dream careers efficiently and effectively. Our platform leverages advanced algorithms and user-friendly
                    interfaces to streamline the job search process, making it easier than ever for candidates to find opportunities
                    that match their skills and aspirations. Whether you re a recent graduate or an experienced professional, VagasExpress
                    offers a diverse range of job listings across various industries, ensuring that every user can find the perfect fit. Join us
                    today and take the first step towards your next career move!</p>


                <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "mt-4 h-[50PX]   w-auto  px-4 py-2 rounded  cursor-pointer")}>
                    Voltar para Home
                </Link>
            </div>



         
        </div>
    )
}