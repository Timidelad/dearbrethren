export default function jointhecommunity() {
    return (
        <section className="px-[16px] pt-[20px] lg:px-[30%] bg-[url('/images/bgimage.png')] bg-cover bg-center bg-no-repeat h-screen">
            <h1 className="text-[20px]">join the <b>Hello Brethren&apos;s</b> Community</h1>
            <form action="" className="mt-[30px]">
                <div className="flex flex-col mb-4">
                    <label htmlFor="name">Your full name</label>
                    <input
                        type="text"
                        name="user_name"
                        id="fullname"
                        placeholder="John Doe"
                        className="mt-2 border border-[#C0BCC4] py-3 rounded-[30px] pl-2 w-full focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="hello@gmail.com"
                        className="mt-2 border border-[#C0BCC4] py-3 rounded-[30px] pl-2 w-full focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="subject">Why are you sending this message</label>
                    <input
                        type="text"
                        name="user_subject"
                        id="subject"
                        placeholder="why are you writing this message"
                        className="mt-2 border border-[#C0BCC4] py-3 rounded-[30px] pl-2 w-full focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                        required
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="whatsappNumber">Your whatsapp Number</label>
                    <input
                        type="number"
                        name="user_number"
                        id="number"
                        placeholder="+2348000000000"
                        className="mt-2 border border-[#C0BCC4] py-3 rounded-[30px] pl-2 w-full focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-[#1E3A8A] text-white py-[10px] rounded-[30px]">Submit</button>
            </form>
        </section>
    )
}