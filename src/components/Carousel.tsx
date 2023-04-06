function Item({id, imgsrc, title, content}: {id: string, imgsrc: string, title: string, content: string}){
    return (
        <div id={id} className="carousel-item">
            <div className="hero min-h-full" style={{ backgroundImage: `url(${imgsrc})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-5xl font-bold text-start">{title}</h1>
                <p className="mb-5 text-justify text-lg ">{content}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea animi ut corporis aut magni inventore ducimus maxime voluptatibus quisquam vel, dolore iusto at vero assumenda quod ad. At, quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea animi ut corporis aut magni inventore ducimus maxime voluptatibus quisquam vel, dolore iusto at vero assumenda quod ad. At, quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea animi ut corporis aut magni inventore ducimus maxime voluptatibus quisquam vel, dolore iusto at vero assumenda quod ad. At, quia?"



function SelectorButton({id, index}: {id: string, index: number}){
    return (
        <a className="btn" href={"#" + id}>{index}</a>
    )
}

function Carousel({items}: {items: {id: string, img: string}[]}) {
    return ( 
        <div className="relative flex-col h-[calc(100vh-64px)]">
            <div className="carousel flex-grow">
                {items.map(item => (<Item id={item.id} imgsrc={item.img} title="Hello world" content={lorem} />))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0">
                {items.map((item, i) => (<SelectorButton id={item.id} index={i + 1} />))}
            </div>
        </div>
     );
}

export default Carousel;