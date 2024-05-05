import Link from "next/link"
import Head from "next/head"
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/header'));
const Footer = dynamic(() => import('../components/footer'));

export default function projeler(){
    return <>
      <Header />
      <Head>
        <title>BBSM - Projeler</title>
        <link rel="icon" href="/bbsm.ico" /> {"/public/bbsm.ico"}
      </Head>


      <div className="flex bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 max-w-full pb-10 h-auto text-justify p-4 items-center">
        <div className="flex flex-col w-9/12 mt-20">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-9/12 lg:w-6/12 text-my-beyaz font-extrabold leading-normal mx-auto">Projelerimiz</p>
            <p className="mx-auto mt-6 indent-6 w-9/12 lg:w-6/12 text-left font-semibold leading-normal text-xxs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-my-navgri">
              Projelerimiz, teknoloji ve inovasyonun sınırlarını zorlayan yaratıcı çözümleri sunma taahhüdünü yansıtıyor. Her bir projemiz, müşterilerimize benzersiz değerler sunmamızı sağlayan kapsamlı bir mühendislik yaklaşımının bir sonucudur. İşte bazı projelerimizin öne çıkanları:</p>
        </div>
        <div className="relative w-3/12 mt-20 md:m-10">
          <img alt="" className="h-auto w-auto object-cover md:p-2 lg:p-8 xl:p-10 md:-ml-8 lg:-ml-32" src="images/3.webp"/>
        </div>
      </div>


      <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-16 md:p-10 xl:p-36 w-full sm:w-9/12 md:w-6/12 lg:w-9/12 xl:w-full mx-auto">
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/lautus.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                            İnsansız Deniz Aracı
                        </h5>
                    </a>
                    <p className="antialiased text-white font-light text-xs xl:text-sm">
                        - Gömülü Yazılımı <br/>
                        - Elektronik
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/fab.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                            Fabrika Otomasyon
                        </h5>
                    </a>
                    <p className="antialiased text-white font-light text-xs xl:text-sm  ">
                        - Endüstriyel Otomasyon Yazılımı
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/erp.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                            Ymm Erp
                        </h5>
                    </a>
                    <p className="antialiased text-white font-light text-xs xl:text-sm  ">
                        - Veri Yönetimi <br/>
                        - Web Geliştirme ve ERP Yazılımı
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/3d.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                            İha Kanat Modellemesi
                        </h5>
                    </a>
                    <p className="antialiased text-white font-light text-xs xl:text-sm  ">
                            - 3D Modelleme
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/gradiometer.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                            Gradiometer App
                        </h5>
                    </a>
                    <p className="antialiased text-white font-light text-xs xl:text-sm  ">
                        - Veri Görselleştirme Ve Haritalandırma<br/>
                        - Mobil ve Masaüstü Platform Geliştirme
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/pcb.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                            Akıllı Sulama Sistemi
                        </h5>
                    </a>
                    <p className="antialiased text-white font-light text-xs xl:text-sm ">
                        - Prototipleme (3D Modelleme , Elektronik , Yazılım)<br/>
                        - Pcb Devre Tasarım Ve Baskı 
                    </p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
}