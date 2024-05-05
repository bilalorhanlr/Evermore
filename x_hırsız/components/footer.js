import Link from "next/link";

export default function Footer()
{
    return <>
        <div className="px-4 pt-12 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 bg-my-footer bg-opacity-50">
            <div className="grid gap-10 row-gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                <div href="#" className="mr-4 mb-8 block cursor-pointer py-1.5 text-base font-medium leading-relaxed text-inherit antialiased">
                <img alt="" className="h-14 " src="images/bbsmlogo3.webp"/>
                </div>
                <div className="mt-2 lg:max-w-sm">
                    <p className="text-sm text-my-my-navgri">
                    Sitemizde bulunan yazı, video, fotoğraf ve haberlerin her hakkı saklıdır.
                    </p>
                </div>
                </div>
                <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking-wide text-my-beyaz">Contacts</p>
                <div className="flex">
                    <p className="mr-1 text-my-ebbeyaz">Phone:</p>
                    <a href="tel:+905533231993" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-my-navgri hover:text-my-mavi">+90 553 323 1993</a>
                </div>
                <div className="flex">
                    <p className="mr-1 text-my-ebbeyaz">Email:</p>
                    <a href="mailto:info@bbsm.tech" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-my-navgri hover:text-my-mavi">info@bbsm.tech</a>
                </div>
                </div>
                <div>
                <span className="text-base font-bold tracking-wide text-my-beyaz">Social</span>
                <div className="flex items-center mt-1 space-x-3">
                    <a href="https://www.instagram.com/bbsm.tech/" target="_blank" className="text-my-beyaz transition-colors duration-300 hover:text-my-mavi">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                        ></path>
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/bbsm-technology/" target="_blank" className="text-my-beyaz transition-colors duration-300 fill-current hover:text-my-mavi">
                    <svg viewBox="0 0 448 512" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                    </svg>
                    </a>
                    <a href="https://www.instagram.com/bbsm.tech/" target="_blank" className="text-my-beyaz transition-colors duration-300 hover:text-my-mavi">
                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                        <circle cx="15" cy="15" r="4"></circle>
                        <path
                        d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                        ></path>
                    </svg>
                    </a>
                </div>
                <p className="mt-4 text-sm text-my-navgri">
                    Projelerinizi hayata geçirmek için bize ulaşmanız yeterli. Size en uygun, en hızlı ve en doğru çözümü sunacağımızdan şüpheniz olmasın.
                </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-my-navgri lg:flex-row">
                <p className="text-sm text-my-navgri">
                © Copyright 2023 BBSM Technology All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <li>
                    <a href="/" className="text-sm text-my-navgri transition-colors duration-300 hover:text-my-mavi">F.A.Q</a>
                </li>
                <li>
                    <a href="/" className="text-sm text-my-navgri transition-colors duration-300 hover:text-my-mavi">Privacy Policy</a>
                </li>
                <li>
                    <a href="/" className="text-sm text-my-navgri transition-colors duration-300 hover:text-my-mavi">Terms &amp; Conditions</a>
                </li>
                </ul>
            </div>
        </div>
    </>

}