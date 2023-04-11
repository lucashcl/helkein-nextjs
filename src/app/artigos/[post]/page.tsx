"use client"

import { fetchData } from "@/utils/functions";
import { useOnMounted } from "@/utils/hooks";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

function TitleSkeleton() {
    return (
        <div role="status" className="h-[50vh] bg-neutral-900 flex items-center justify-center animate-">
        </div>
    )
}

function ContentSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
            <div className="bg-neutral-800 w-full h-4 rounded-full mb-4"></div>
        </div>
    )
}


function Page({params}: {params: {post: string}}) {
    const [data, setData] = useState({
        title: "",
        content: "",
        imgUrl: "",
        date: ""
    });
    const {post} = params
    
    useOnMounted(async () => {
        setData(await fetchData("http://localhost:3000/api/posts/"+post))
        console.log(scrollYProgress);
        
    })

    const {scrollYProgress} = useScroll()
    const scrollTreshold = 0.02
    const animation = {
        titleHeight: useTransform(useSpring(scrollYProgress), [scrollTreshold, 0], ["15vh", "50vh"]),
        bgOpacity: useTransform(scrollYProgress, [0, scrollTreshold], [0.5, 0.8]),
        progress: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    }
    const paragraphs = data.content.split("  ")    

    return ( 
        <motion.div className="relative">
            {data.title ? (<motion.div  style={{backgroundImage: `url(${data.imgUrl})`, height: animation.titleHeight}} className="sticky top-0 w-full flex flex-col justify-center gap-2 ">
                <div className="absolute z-[1] px-8 w-full flex flex-col items-center">
                    <h1 className="text-6xl font-bold">{data.title}</h1>
                    <p>— {data.date} —</p>
                </div>
                <motion.div style={{width: animation.progress}} className="absolute left-0 -bottom-1 bg-neutral-500 w-full h-1 self-end"></motion.div>
                <motion.div style={{opacity: animation.bgOpacity}} className="absolute bg-black w-full h-full"></motion.div>
            </motion.div>) : <TitleSkeleton />}
            <div className="xl:px-96 lg:px-40 mt-8 ">
                {data.content ? paragraphs.map((par, i) => (<p key={i} className="text-justify mb-4">{par}</p>)) : (<ContentSkeleton />)}
            </div>
        </motion.div>
     );
}

export default Page;




















// import ImageTitle from "@/components/ImageTitle"

// async function getData(id: string | number){
//     return (await fetch("http://localhost:3000/api/posts/"+id, {cache: "no-store"})).json()
// }

// async function Page({params}: {params: {post: string}}) {
//     const {post} = params
//     const {title, imgUrl, content} = await getData(post)
//     const paragraphs: string[] = content.split("|")
//     //
//     return ( 
//         <div className="relative">
//             <ImageTitle imgUrl={imgUrl} title={title} />
//             <div className="px-96 py-8 flex items-center justify-center">
//                 <div className="w-5/6">
//                     {paragraphs.map(par => (<p className="mb-4 text-justify">{par}</p>))}
//                 </div>
//                 {/* <div className=" h-100% bg-white"></div> */}
//             </div>
//         </div>
//      );
// }

// export default Page;
