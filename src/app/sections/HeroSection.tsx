import Navbar from "../components/NavBar"
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="px-[16px] lg:px-[120px] bg-[url('/images/bgimage.png')] bg-cover bg-center bg-no-repeat">
            <Navbar />
            <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center pb-4 mt-6">
                <div className="mt-[30px] lg:w-[43%]">
                    <div className="lg:text-[20px]">
                        <p><b>Hello Brethren</b> is a Christian community that aims to bring people to the understanding that we are one with Christ, and to unite God&apos;s children with the Father.</p>
                        <p className="mt-2">There is a welcome  embrace, an outstretched hand, and a listening ear.</p>
                        <p className="mt-2">There is building, and there is bonding.</p>
                        <p className="mt-2">There is reconciliation, there is revelation.</p>
                        <p className="mt-2">And there is clarity, even for the one who lacks understanding</p>
                    </div>
                    <div className="lg:mt-[40px] text-[20px]">
                        <p>This is home for God&apos;s children</p>
                        <p>This is where you belong</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/BANNER.png"
                        alt="dear Brethren"
                        width={580}
                        height={575}
                    />
                </div>
            </section>
        </div>
    )
}