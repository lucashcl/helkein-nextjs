import Link from "next/link";

function Navbar() {
    return ( 
        <div className="z-10 navbar bg-base-300 sticky top-0">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">HELKEIN</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="nav-link" href="/artigos">Artigos</Link></li>
                    <li><Link className="nav-link" href="/links">Links</Link></li>
                </ul>
            </div>
        </div>
     );
}

export default Navbar;