import Link from "next/link";

function Navbar() {
    return ( 
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">HELKEIN</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/artigos">Artigos</Link></li>
                    <li><Link href="/links">Links</Link></li>
                </ul>
            </div>
        </div>
     );
}

export default Navbar;