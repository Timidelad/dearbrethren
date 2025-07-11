import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className=" flex justify-between lg:py-5">
            <p className="text-[20px] lg:text-[30px]">HELLO BRETHREN</p>
            <Link href='/jointhecommunity' className="hidden lg:block bg-[#3B82F6] rounded-[30px] px-4 py-3">Join The Community</Link>
        </nav>
    )
}