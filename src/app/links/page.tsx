import Link from "next/link";

function LinkItem(){
    return (
        <Link href="" className="group">
            <div className="flex bg-primary p-4 items-center gap-4 rounded-full group-hover:bg-primary-focus transition">
                <h2>@Helkein_filosofadas</h2>
                <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" style={{height: "32px"}} />
            </div>
        </Link>
    )
}


function Links() {
    return ( 
        <div className=" grow flex flex-col items-center justify-center gap-6">
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
        </div>
     );
}

export default Links;