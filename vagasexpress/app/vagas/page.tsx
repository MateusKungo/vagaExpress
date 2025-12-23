"use client"
import jobs from "@/components/item-vagas/data";
import { JobCard } from "@/components/item-vagas/itemvagas";
import { div } from "framer-motion/client";




export default function Vagas() {
    return (
    <div className="flex justify-center">
         <div className="container max-w-7xl px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>
            <p className="text-center text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate veniam in quam sed rem maxime corrupti reprehenderit impedit commodi dolores doloribus, officia, veritatis autem aliquid ex ratione. Consectetur, neque possimus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque saepe ipsam esse fuga aut fugit facilis distinctio ut blanditiis, modi illo ipsum amet provident quam eaque sequi pariatur velit accusantium.?</p>
          
                <div className="space-y-6 max-w-7xl mx-auto py-10">
                    {jobs.map((job) => (
                        <JobCard
                            key={job.id}
                            title={job.title}
                            company={job.company}
                            location={job.location}
                            description={job.description}
                            image={job.image}
                        />
                    ))}
                </div>
           
        </div>
    </div>
    )
} 