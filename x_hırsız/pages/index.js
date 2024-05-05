import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import dynamic from 'next/dynamic';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return <>
    <Header />
    <Head>
      <title>BBSM Technology</title>
      <link rel="icon" href="/bbsm.ico" /> {"/public/bbsm.ico"}
    </Head>
    <div className="bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 max-w-full h-auto text-justify p-4">
      <div className="flex justify-end items-start mt-20 -mr-4 2xl:mr-20">
        <img alt="" className="h-44 sm:h-72 md:h-96 lg:h-128 xl:h-140" src="images/1.webp"/>
      </div>
      <div className="flex flex-col -mt-36 sm:-mt-48 md:-mt-64 lg:-mt-100 ml-8 md:ml-24 xl:ml-32 2xl:ml-52">
          <p className="w-44 sm:w-64 lg:w-72 xl:w-96 font-semibold leading-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left text-my-beyaz">Projenizi Hayata Geçirmek İçin</p>
          <div className="pl-10 sm:pl-24 md:pl-32 xl:pl-48 mt-3 md:mt-8 lg:ml-3">
            <Link href="/bizeulasin" className="bg-my-mavi text-xs lg:text-lg xl:text-base w-30 2xl:w-40 p-2 pl-4 pr-4 lg:p-4 lg:pl-8 lg:pr-8 rounded-2xl text-my-beyaz justify-items-end font-semibold">Bize Ulaşın</Link> 
          </div>
      </div>
      <div className="flex items-center justify-items-center justify-center mt-24 sm:mt-24 md:mt-40 lg:mt-64 xl:mt-72 2xl:mt-64 pr-2 lg:pl-16 lg:pr-16">
        <a href="https://www.ibb.istanbul/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-6 md:h-10 xl:h-16 2xl:h-20 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/ibb.webp" alt="" />
        </a>
        <a href="https://www.navtek.net/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-3 md:h-5 xl:h-8 2xl:h-10 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/navtek.webp" alt="" />
        </a>
        <a href="https://www.gisasgemi.com/en/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-6 md:h-10 xl:h-16 2xl:h-20 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/gisas.webp" alt="" />
        </a>
        <a href="https://mucitgenc.com/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-6 md:h-10 xl:h-16 2xl:h-20 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/mucit.webp" alt="" />
        </a>
        <a href="https://www.elbistan.bel.tr/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-9 md:h-16 xl:h-24 2xl:h-32 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/elbistan.webp" alt="" />
        </a>
        <a href="https://teknolojiaihl.meb.k12.tr/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-7 md:h-12 xl:h-16 2xl:h-24 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/sancaktepe.webp" alt="" />
        </a>
        <a href="https://www.lider.org.tr/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-7 md:h-12 xl:h-16 2xl:h-24 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/lider.webp" alt="" />
        </a>
        <a href="https://www.sahsiyetakademisi.com/" target="_blank">
          <img className="m-3 md:m-6 lg:m-10 h-4 md:h-6 xl:h-10 2xl:h-12 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/sahsiyet.webp" alt="" />
        </a>
      </div>
    </div>

    <div className="max-w-md mx-auto m-8 overflow-hidden md:max-w-6xl md:mt-16 lg:mt-36 mt-24">
      <div className="lg:flex">
        <div className="m-12 md:m-28 lg:m-6 mt-12 mb-12 md:mb-2 lg:mb-24">
          <div href="#" className="block text-2xl md:text-5xl leading-tight font-extrabold text-my-beyaz">Misyonumuz</div>
          <p className="mt-6 text-my-navgri leading-7 font-light md:max-w-4xl">Misyonumuz, dünyayı daha akıllı, daha bağlantılı ve daha güvenli bir yer haline getirmek için teknolojiyi kullanmak. Akıllı cihazlar, elektronik sistemler, yazılım çözümleri ve prototipler geliştirerek, insanların hayatlarını daha kolay, verimli ve eğlenceli hale getirmek için çalışıyoruz. Müşterilerimize ve topluma değer katmayı hedefliyor, sürdürülebilir teknolojik yeniliklerle dünyayı değiştiriyoruz.</p>
        </div>
        <div className="flex md:hidden lg:flex md:shrink-0 p-6">
          <img className="h-48 w-9/12 mx-auto object-cover md:h-48 md:w-6/12 lg:w-64 rounded-3xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/elektronikanasayfa.webp" alt="Modern building architecture" />
        </div>
      </div>
    </div>
    <div className="max-w-md mx-auto m-8 overflow-hidden md:max-w-6xl md:mt-0 md:mb-8 mt-32 lg:mb-32">
      <div className="lg:flex">
        <div className="flex md:shrink-0 p-6">
          <img className="h-48 w-9/12 mx-auto object-cover md:h-48 md:w-6/12 lg:w-64 rounded-3xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="/images/yazılımanasayfa.webp" alt="Modern building architecture" />
        </div>
        <div className="m-12 md:m-28 lg:m-6 md:mt-14 mt-12 mb-12">
          <div href="#" className="block text-2xl md:text-5xl leading-tight font-extrabold text-my-beyaz">Vizyonumuz</div>
          <p className="mt-6 text-my-navgri leading-7 font-light md:max-w-4xl">Vizyonumuz, teknolojiyi kullanarak sınırları zorlamak ve geleceğin daha iyi bir dünyasını inşa etmek. Her zaman en son teknolojiye hakim olarak, dünya genelindeki kullanıcıların ihtiyaçlarını karşılamak ve aşmak için öncü olmak istiyoruz. Yenilikçi ürünler ve çözümlerle insanların yaşam kalitesini artırmak ve dünyayı daha sürdürülebilir bir şekilde şekillendirmek için çalışıyoruz.</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-t from-my-mavi to-my-siyah max-w-full h-auto">
      <h1 className="block text-2xl md:text-5xl leading-tight font-extrabold text-my-beyaz text-center pt-16 pb-10 ">Hizmetlerimiz</h1>
      <div className="grid grid-col gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 p-6">
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
            Prototipleme
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          Fikirlerinizi gerçeğe dönüştürmek için prototipler oluşturuyoruz. Ürün tasarımı ve geliştirme sürecinizde size yol gösteriyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="19" x2="21" y2="19" />  <rect x="5" y="6" width="14" height="10" rx="1" /></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          Web Geliştirme
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          İnternet dünyasında etkileyici varlık yaratmak için web geliştirme ve tasarım hizmetleri sunuyoruz. Kullanıcı dostu, özgün ve işlevsel web siteleri oluşturuyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />  <rect x="9" y="9" width="6" height="6" />  <line x1="9" y1="1" x2="9" y2="4" />  <line x1="15" y1="1" x2="15" y2="4" />  <line x1="9" y1="20" x2="9" y2="23" />  <line x1="15" y1="20" x2="15" y2="23" />  <line x1="20" y1="9" x2="23" y2="9" />  <line x1="20" y1="14" x2="23" y2="14" />  <line x1="1" y1="9" x2="4" y2="9" />  <line x1="1" y1="14" x2="4" y2="14" /></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          PCB Tasarım ve Baskı
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          PCB tasarımı ve baskısı konusunda uzmanız. Elektronik cihazların temel bileşenlerini bir araya getirerek, veri iletimi ve işlem gücünü optimize ediyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />  <line x1="12" y1="18" x2="12.01" y2="18" /></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          Mobil Uygulama
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          Mobil cihazlar için özel uygulamalar geliştiriyoruz. iOS ve Android platformlarında, kullanıcı ihtiyaçlarına uygun, hızlı ve güvenilir uygulamalar sunuyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          Masaüstü Uygulama
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          Masaüstü bilgisayarlar için özel yazılım çözümleri üretiyoruz. İşletim sistemine uygun, güçlü ve özelleştirilebilir masaüstü uygulamalar geliştiriyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />  <line x1="6" y1="6" x2="6.01" y2="6" />  <line x1="6" y1="18" x2="6.01" y2="18" /></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          ERP ve Otomasyon
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          İş süreçlerinizi daha verimli hale getirmek için Enterprise Resource Planning (ERP) ve otomasyon sistemleri oluşturuyoruz. Verilerinizi yönetmek ve işlerinizi optimize etmek için çözümler sunuyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />  <polyline points="7.5 19.79 7.5 14.6 3 12" />  <polyline points="21 12 16.5 14.6 16.5 19.79" />  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  <line x1="12" y1="22.08" x2="12" y2="12" /></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          3 Boyutlu Tasarım ve Baskı
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          Üç boyutlu tasarım ve baskıda uzmanız. İhtiyacınıza uygun prototipler, ürünler veya bileşenler üretmek için gelişmiş 3D tasarım ve baskı teknolojilerini kullanıyoruz.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          Destek ve Danışmanlık
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          Alanında deneyimli ekibimiz, projelerinizde teknik destek ve danışmanlık sağlar. Sorunları çözmek ve en iyi çözümleri sunmak için yanınızdayız.
          </p>
        </div>
        <div className="mx-auto text-center m-4">
          <svg className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-my-beyaz mx-auto border shadow-inner shadow-my-mavi bg-my-siyah rounded-lg p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">   <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />  <line x1="12" y1="16" x2="12" y2="20" />  <line x1="9" y1="20" x2="15" y2="20" />  <path d="M8 12l3 -3l2 2l3 -3" /></svg>
          <p className="text-my-beyaz text-sm md:text-lg font-bold m-2">
          Eğitim
          </p>
          <p className="text-my-beyaz font-light text-xs md:text-sm mx-auto w-9/12 md:w-6/12 lg:w-9/12">
          Teknoloji ve elektronik konularında eğitim hizmetleri sunuyoruz. Personelinizin veya öğrencilerinizin yeteneklerini geliştirmelerine yardımcı oluyoruz ve sektördeki en son gelişmeleri takip etmelerini sağlıyoruz.
          </p>
        </div>
      </div>
    </div> 

    <div className="flex bg-gradient-to-tr from-stone-800 via-sky-700 to-my-mavi mx-auto w-9/12 xl:w-6/12 h-auto mb-12 mt-12 md:mt-16 md:mb-16 lg:mt-32 lg:mb-32 items-center rounded-3xl pr-4 lg:pr-16">
      <div className="w-6/12">
        <p className="text-my-beyaz text-xxs sm:text-sm lg:text-xl xl:text-xl 2xl:text-2xl font-bold ml-4 md:ml-10 text-left">
        Detaylı Bilgi Almak Ve Projelerinizi Hayata Geçirmek İçin
        </p>
      </div>
      <div className="w-3/12">
        <img alt="" className="p-3 md:p-6 -mx-4 h-auto" src="images/2.webp"/>
      </div>
      <Link href="/bizeulasin" className="w-3/12 bg-my-siyah text-my-beyaz text-xxs sm:text-sm md:text-lg font-bold  text-center p-2 md:p-4 rounded-2xl hover:bg-my-beyaz hover:text-my-mavi">
          Bize Ulaşın
      </Link>
    </div>
    <Footer />
  </>  
}
