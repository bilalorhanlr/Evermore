import Link from "next/link"
import Head from "next/head"
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/header'));
const Footer = dynamic(() => import('../components/footer'));

export default function bizeulasin() {
    return <>
        <Header />
        <Head>
            <title>BBSM - Bize Ulaşın</title>
            <link rel="icon" href="/bbsm.ico" /> {"/public/bbsm.ico"}
        </Head>
        
        <div className="flex bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 max-w-full pb-10 h-auto text-justify p-4 md:pt-10 items-center">
            <div className="flex flex-col w-9/12 mt-20">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-9/12 lg:w-6/12 text-my-beyaz font-extrabold leading-normal mx-auto">Bize Ulaşın</p>
                <p className="mx-auto mt-6 indent-6 w-9/12 lg:w-6/12 text-left font-semibold leading-normal text-xxs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-my-navgri">
                Size işinizle ilgili her türlü sorunuzu yanıtlamak ve işbirliği fırsatlarını tartışmak için buradayız. <br/>
                </p>
                <p className="mx-auto mt-6 indent-6 w-9/12 lg:w-6/12 text-left font-semibold leading-normal text-xxs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-my-navgri">
                Teşekkür ederiz, BBSM Techonology ekibi olarak sizinle tanışmaktan mutluluk duyuyoruz!
                </p>
            </div>
            <div className="relative w-3/12 mt-20 md:m-10">
                <img alt="" className="h-auto w-auto object-cover md:p-2 lg:p-8 xl:p-10 md:-ml-8 lg:-ml-32" src="images/4.webp"/>
            </div>
        </div>
        <div className="min-h-screen bg-my-siyah py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-my-mavi to-my-siyah shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative px-4 py-10 bg-gradient-to-bl from-my-mavi to-my-siyah shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                        <h1 className="text-xl sm:text-3xl font-extrabold">Contact Us!</h1>
                        <p className="text-xs sm:text-lg text-my-beyaz font-thin">
                            Fill up the form below to send us a message.
                        </p>
                    </div>
                    <form>
                        <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 bg-my-beyaz text-my-siyah leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" name="name"/>
                        <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 bg-my-beyaz text-my-siyah leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email"/>
                        <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 bg-my-beyaz text-my-siyah leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Subject" name="_subject"/>
                        <textarea className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 bg-my-beyaz text-my-siyah leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type your message here..." name="message"></textarea>
                        <div className="flex justify-between">
                            <input className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset"/>
                            <input className="shadow bg-my-beyaz hover:bg-my-ebbeyaz text-my-mavi font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send ➤"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                
        <Footer />
    </>
}
  