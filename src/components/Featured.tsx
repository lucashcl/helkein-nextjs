interface IContent {imgUrl: string, title: string, content: string}
import Link from "next/link"

const data: IContent[] = [
    {
        title: "Esboço de conselhos ao estudante de filosofia",
        content: "O presente texto destina-se àqueles que desejam estudar filosofia e foi escrito como espécie de síntese de experiências entre o ensino e o aprendizado da matéria, por isso podendo conter explicações de tom autobiográfico seguidas de pequenas anedotas úteis à reflexão, algo que não poderia faltar em escritos que pretendam tratar do amor à sabedoria. Os conselhos e explicações aqui postos destinam-se a guiar o interessado em filosofia através da forma como ela realmente se apresenta, a saber, como problema. Por conta disso, alguns temas, perguntas e reflexões soarão estranhos e até invertidos em relação ao que normalmente se prega.",
        imgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*WrObOvh3BKq0EMB08IUiBA.jpeg",
    },
    {
        title: "Explicação e Realismo",
        content: "Um dos modos de argumentar a favor de uma teoria é mostrar que fornece uma boa explicação de um corpo de fenômenos e que ela a faz, de fato, melhor do que quaisquer alternativas disponíveis. Esse padrão de argumentação não é limitado pelo tempo ou pelo tema. Podemos encontrar tais argumentações na sociologia, na psicologia, na química e na astronomia desde os tempos de Copérnico até os mais recentes periódicos científicos.",
        imgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zM2ukv9W1fqHFNOtVFYudw.jpeg"
    },
    {
        title: "Niilismo, Ética e o Dilema do Bonde",
        content: "O Problema do Bonde é um potencial corruptor moral pertencente a uma propaganda pró-assassinato com tendências niilistas. Ele imagina um cenário onde um bonde descontrolado pode ser desviado com o puxar duma alavanca a fim de salvar cinco vidas. Infelizmente, isso envolve o assassinato de uma pessoa inocente que, de modo contrário, o bonde não machucaria.",
        imgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fqIi-75p3ZygaPZJee1v2Q.jpeg"
    }, 
    {
        title: "Esboço de um guia de leitura para as obras de Eric Voegelin",
        content: "O acontecimento da busca é um processo histórico. O mundo de símbolos que compactamente simbolizam a realidade em qualquer ponto histórico dado tem de submeter-se à pressão da análise noética",
        imgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*FWJfxePbvlv7LpIXBRV01g.jpeg"
    }
]

function Main({block}: {block: IContent}) {
    const {content, imgUrl, title} = block
    return (
        <Link href="" className="grow-[2] min-h-full relative cursor-pointer group" >
            <div className="absolute z-[2] w-full h-full flex flex-col items-start justify-center gap-4 p-12 group-hover:scale-[99%] transition-all">
                <h1 className="box-border  text-white text-5xl font-bold">{title}</h1>
                <p className="box-border text-neutral-300 text-justify line-clamp-6">{content}</p>
            </div>
            <div className="absolute z-[1] h-full w-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all group-hover:backdrop-blur-sm"></div>
            <div style={{backgroundImage: `url(${imgUrl})`}}  className="absolute h-full w-full transition-all duration-300"></div>
        </Link>
    )
}

function Post({block}: {block: IContent}){
    const {content, imgUrl, title} = block
    //bg-[url(https://miro.medium.com/v2/resize:fit:828/format:webp/1*zM2ukv9W1fqHFNOtVFYudw.jpeg)]
    return (
        <Link href="#2" className="group min-h-full relative group">
            <div className="absolute z-[2] h-1/3 w-full justify-between p-4 group-hover:scale-[99%] transition">
                <h1 className="box-border text-neutral-100 text-2xl font-bold mb-4">{title}</h1>
                <p className="box-border text-neutral-300 line-clamp-3">{content}</p>
            </div>
            <div className="absolute z-[1] h-full w-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all group-hover:backdrop-blur-sm"></div>
            <div style={{backgroundImage: `url(${imgUrl})`}} className={`w-full h-1/3  relative  bg-cover`}>
            </div>
        </Link>
    )
}

function Featured() {
    return ( 
        <div className="h-full flex">
            <Main block={data[0]}  />
            <div className="flex-col grow">
                <Post block={data[1]} />
                <Post block={data[2]} />
                <Post block={data[3]} />
            </div>
            
        </div>
     );
}

export default Featured;