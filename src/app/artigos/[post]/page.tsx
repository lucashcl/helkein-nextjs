async function getData(id: string | number){
    return (await fetch("http://localhost:3000/api/posts/"+id, {cache: "no-store"})).json()
}

async function Page({params}: {params: {post: string}}) {
    const {post} = params
    const {title, imgUrl, content} = await getData(post)
    const paragraphs: string[] = content.split("|")
    //
    return ( 
        <div className="relative">
            <div style={{backgroundImage: `url(${imgUrl})`}} className=" w-full h-[25vh] flex flex-col justify-center gap-2 relative top-0">
                <div className="absolute z-[1] px-8">
                    <h1 className="z-[1] text-6xl font-bold">{title}</h1>
                    <p>20 de Abril de 2022</p>
                </div>
                <div className="absolute bg-black w-full h-full bg-opacity-50"></div>
            </div>
            <div className="p-8 flex">
                <div className="w-5/6">
                    {paragraphs.map(par => (<p className="mb-4 text-justify">{par}</p>))}
                </div>
                <div className=" h-100% bg-white"></div>
            </div>
        </div>
     );
}

export default Page;