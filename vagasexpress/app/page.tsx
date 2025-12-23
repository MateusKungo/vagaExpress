import Image from "next/image";
import imagembannse from "@/public/undraw_working-together_r43a.png"
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Image src={imagembannse}  className="mx-auto w-5xl" alt="imagem banner"/>
      <h2 className="text-center font-bold text-2xl"> Welcome to VagasExpress!</h2>
      <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit <br /> repudiandae aliquam optio! Fugit, expedita maiores eum ad reprehenderit a vel soluta dolores illum culpa unde! Hic recusandae eos necessitatibus!</p>
      <Button className="mx-auto h-12 w-50 mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
        Get Started
      </Button>
    </div>
  );
}
