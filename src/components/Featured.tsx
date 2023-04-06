interface IContent {imgUrl: string, title: string, content: string}
import Link from "next/link"

const data: IContent[] = [
    {
    imgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*WrObOvh3BKq0EMB08IUiBA.jpeg",
    content: "O presente texto destina-se àqueles que desejam estudar filosofia e foi escrito como espécie de síntese de experiências entre o ensino e o aprendizado da matéria, por isso podendo conter explicações de tom autobiográfico seguidas de pequenas anedotas úteis à reflexão, algo que não poderia faltar em escritos que pretendam tratar do amor à sabedoria. Os conselhos e explicações aqui postos destinam-se a guiar o interessado em filosofia através da forma como ela realmente se apresenta, a saber, como problema. Por conta disso, alguns temas, perguntas e reflexões soarão estranhos e até invertidos em relação ao que normalmente se prega.",
    title: "Esboço de conselhos ao estudante de filosofia"
    },
    {
        title: "Explicação e Realismo",
        content: "Um dos modos de argumentar a favor de uma teoria é mostrar que fornece uma boa explicação de um corpo de fenômenos e que ela a faz, de fato, melhor do que quaisquer alternativas disponíveis. Esse padrão de argumentação não é limitado pelo tempo ou pelo tema. Podemos encontrar tais argumentações na sociologia, na psicologia, na química e na astronomia desde os tempos de Copérnico até os mais recentes periódicos científicos.",
        imgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zM2ukv9W1fqHFNOtVFYudw.jpeg"
    }
]

function Main({block}: {block: IContent}) {
    const {content, imgUrl, title} = block
    return (
        <Link href="" style={{backgroundImage: `url("${imgUrl}")`}} className="grow-[2] min-h-full relative cursor-pointer group" >
            <div className="absolute w-full h-full flex flex-col items-start justify-center gap-4 p-16 group-hover:p-12 transition-all">
                <h1 className="box-border  text-white text-5xl font-bold">{title}</h1>
                <p className="box-border text-neutral-300 text-justify line-clamp-6 ">{content}</p>
            </div>
            <div className=" h-full w-full bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-300"></div>
        </Link>
    )
}

function Post({block}: {block: IContent}){
    const {content, imgUrl, title} = block
    return (
        <Link href="" style={{backgroundImage: `url("${imgUrl}")`}} className="relative cursor-pointer group" >
            <div className="absolute w-full h-full justify-between p-4 box-border">
                <h1 className="box-border text-neutral-100 text-2xl font-bold mb-4">{title}</h1>
                <p className="text-neutral-300 line-clamp-3">{content}</p>
            </div>
            <div className="h-1/3 w-full bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
         </Link>
    )
}





function Featured() {
    return ( 
        <div className="h-full flex">
            <Main block={data[0]}  />
            <div className="flex-col grow">
                <Post block={data[1]} />
                <Post block={data[1]} />
                <Post block={data[1]} />
            </div>
            
        </div>
     );
}

export default Featured;