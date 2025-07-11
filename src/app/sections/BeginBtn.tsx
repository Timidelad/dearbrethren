import Link from 'next/link';

export default function BeginBtn() {
    return (
        <div className="flex justify-center items-center my-[60px] mx-[16px]">
            <Link href='/simpleprayer' className=" bg-[#3B82F6] rounded-[30px] px-4 py-3">A Simple Prayer To Begin Your Journey With Christ</Link>
        </div>
    )
}