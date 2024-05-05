import Link from "next/link"
import Head from "next/head"
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/header'));
const Footer = dynamic(() => import('../components/footer'));

export default function hakkımızda(){
    return <>
      <Header />
      <Head>
          <title>BBSM - Hakkımızda</title>
          <link rel="icon" href="/bbsm.ico" /> {"/public/bbsm.ico"}
      </Head>

      <div className="flex bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 max-w-full pb-10 h-auto text-justify p-4 md:pt-10 items-center">
        <div className="flex flex-col w-9/12 mt-20">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-9/12 lg:w-6/12 text-my-beyaz font-extrabold leading-normal mx-auto">Hakkımızda</p>
            <p className="mx-auto mt-6 indent-6 w-9/12 lg:w-6/12 text-left font-semibold leading-normal text-xxs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-my-navgri">
            BBSM Technology, teknoloji ve inovasyon konularında tutkulu bir ekibin bir araya gelmesiyle kuruldu. Misyonumuz, teknolojiyi kullanarak dünyayı daha iyi bir yer haline getirmektir. BBSM Technology, yaratıcılık, kalite ve müşteri memnuniyeti konularında kararlı bir şekilde ilerlerken, her projede sınırları zorlamayı ve fark yaratmayı amaçlamaktadır. BBSM Technology ekibi olarak, geleceği şekillendirmek ve inovasyonu teşvik etmek için buradayız.
            </p>
        </div>
        <div className="relative w-3/12 mt-20 md:m-10">
          <img alt="" className="h-auto w-auto object-cover md:p-2 lg:p-8 xl:p-10 md:-ml-8 lg:-ml-32" src="images/6.webp"/>
        </div>
      </div>

    <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 p-8 xl:p-16 pt-16 w-full sm:w-9/12 md:w-6/12 lg:w-9/12 xl:w-full mx-auto">
        <div className="relative flex w-6/12 md:w-9/12 flex-col rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative mx-4 mt-4 h-6/12 overflow-hidden rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border text-gray-700 shadow-lg">
                <img src="/images/bilal.webp" alt="profile-picture" />
            </div>
            <div className="p-2 md:p-6 text-center">
                <h4 className="mb-2 block text-md md:text-2xl font-semibold leading-snug text-my-beyaz tracking-normal antialiased">
                Bilal ORHANLAR
                </h4>
                <p className="bg-my-mavi bg-clip-text mb-4 text-xs md:text-lg font-semibold leading-relaxed text-transparent antialiased">
                Co-Founder
                </p>
            </div>
            <div className="flex justify-center -mt-2 items-center mb-4">
                <a href="https://github.com/bilalorhanlr" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg>
                </a>
                <a href="https://www.linkedin.com/in/bilal-orhanlar-323268203/" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                <a href="https://www.instagram.com/bilalorhanlr/" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> </svg>
                </a>
            </div>
        </div>
        <div className="relative flex w-6/12 md:w-9/12 flex-col rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative mx-4 mt-4 h-6/12 overflow-hidden rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border text-gray-700 shadow-lg">
                <img src="/images/samet.webp" alt="profile-picture" />
            </div>
            <div className="p-2 md:p-6 text-center">
                <h4 className="md:mb-2 block text-md md:text-2xl font-semibold leading-snug tracking-normal text-my-beyaz antialiased">
                Samet YILDIRIM
                </h4>
                <p className="bg-my-mavi bg-clip-text mb-4 text-xs md:text-lg font-semibold leading-relaxed text-transparent antialiased">
                Co-Founder
                </p>
            </div>
            <div className="flex justify-center -mt-2 items-center mb-4">
                <a href="https://github.com/sametyldrmm" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg>
                </a>
                <a href="https://www.linkedin.com/in/samet-y%C4%B1ld%C4%B1r%C4%B1m-970905252/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                <a href="https://www.instagram.com/sametyldrm3555/?utm_source=qr&igshid=OGIxMTE0OTdkZA%3D%3D" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> </svg>
                </a>
            </div>
        </div>
        <div className="relative flex w-6/12 md:w-9/12 flex-col rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative mx-4 mt-4 h-6/12 overflow-hidden rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border text-gray-700 shadow-lg">
                <img src="/images/bertay.webp" alt="profile-picture" />
            </div>
            <div className="p-2 md:p-6 text-center">
                <h4 className="md:mb-2 block text-md md:text-2xl font-semibold leading-snug tracking-normal text-my-beyaz antialiased">
                Bertay YILDIRIM
                </h4>
                <p className="bg-my-mavi bg-clip-text mb-4 text-xs md:text-lg font-semibold leading-relaxed text-transparent antialiased">
                Co-Founder
                </p>
            </div>
            <div className="flex justify-center -mt-2 items-center mb-4 ">
                <a href="https://github.com/BertayYldrm" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg>
                </a>
                <a href="https://www.linkedin.com/in/bertayyldrm/" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                <a href="#instagram" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> </svg>
                </a>
            </div>
        </div>
        <div className="relative flex w-6/12 md:w-9/12 flex-col rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border shadow-md mx-auto">
            <div className="relative mx-4 mt-4 h-6/12 overflow-hidden rounded-xl bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 bg-clip-border shadow-lg">
                <img src="/images/mert.webp" alt="profile-picture" />
            </div>
            <div className="p-2 md:p-6 text-center">
                <h4 className="md:mb-2 block text-md md:text-2xl font-semibold leading-snug tracking-normal text-my-beyaz antialiased">
                Mert ACAR
                </h4>
                <p className=" bg-my-mavi bg-clip-text text-xs mb-4 md:text-lg font-semibold leading-relaxed text-transparent antialiased">
                Co-Founder
                </p>
            </div>
            <div className="flex justify-center -mt-2 items-center mb-4">
                <a href="#github" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg>
                </a>
                <a href="https://www.linkedin.com/in/mert-acar-a113bb217/" target="_blank" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                <a href="#instagram" className="block text-my-navgri hover:text-my-mavi bg-clip-text pl-4 pr-4" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> </svg>
                </a>
            </div>
        </div>
      </div>
      <Footer />
    </>
}