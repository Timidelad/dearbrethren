import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CareBanner() {
    return (
        <section className="bg-[url('/images/care.png')] h-[300px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center flex-col gap-y-4">
            <p className="text-[#FDFDFD] text-center">We Care about your spiritual growth, whats your spiritual setbacks? we will love to know</p>
            <Link href="/jointhecommunity" className="bg-white text-[#1E3A8A] rounded-[30px] px-4 py-3">Lets Talk</Link>
            <div className='flex gap-x-5'>
                <Mail className='text-white' />
                <Phone className='text-white' />
            </div>
        </section>
    )
}