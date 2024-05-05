import Link from "next/link"
import Head from "next/head"
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/header'));
const Footer = dynamic(() => import('../components/footer'));

export default function cozumler(){
    return <>
      <Header />
      <Head>
          <title>BBSM - Çözümler</title>
          <link rel="icon" href="/bbsm.ico" /> {"/public/bbsm.ico"}
      </Head>

      <div className="flex bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 max-w-full pb-10 h-auto text-justify p-4 md:pt-10 items-center">
        <div className="flex flex-col w-9/12 mt-20">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-9/12 lg:w-6/12 text-my-beyaz font-extrabold leading-normal mx-auto">Çözümlerimiz</p>
            <p className="mx-auto mt-6 indent-6 w-9/12 lg:w-6/12 text-left font-semibold leading-normal text-xxs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-my-navgri">
            Teknoloji şirketimiz, geniş bir yelpazede teknolojik çözümler sunarak işletmenizin büyümesine ve verimliliğinize katkıda bulunmayı taahhüt ediyor. Deneyimli ve uzman ekibimiz, müşteri ihtiyaçlarınızı anlamak, özelleştirilmiş çözümler sunmak ve sizi rekabetin bir adım önünde tutmak için çalışıyor.</p>
        </div>
        <div className="relative w-3/12 mt-20 md:m-10">
          <img alt="" className="h-auto w-auto object-cover md:p-2 lg:p-8 xl:p-10 md:-ml-8 lg:-ml-32" src="images/5.webp"/>
        </div>
      </div>


      <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 p-16 md:p-10 xl:p-36 w-full sm:w-9/12 md:w-6/12 lg:w-9/12 mx-auto">
      <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/prototipleme.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Prototip Oluşturma
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    Fikirlerinizi hızla hayata geçirmek istiyorsanız, prototiplerimiz size yardımcı olabilir. İş süreçlerinizi optimize etmek ve ürünlerinizi mükemmelleştirmek için prototiplerimizi kullanın. Projelerinizi daha hızlı bir şekilde tamamlayın ve müşterilerinize daha iyi hizmet verin.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/web.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Web Geliştirme ve Tasarımı
                        </h5>
                    </a>
                    <p className="antialiased bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm  ">
                    Web geliştirme ve tasarım ekibimiz, işletmelerin dijital dünyada büyümesine yardımcı olmak için özgün ve etkili web çözümleri sunuyor. Kullanıcı dostu arayüz tasarımı ve güçlü bir alt yapı ile işletmenizin çevrimiçi varlığını güçlendiriyoruz. Her proje için benzersiz bir yaklaşım benimseyerek, işinizi çevrimiçi dünyada öne çıkarıyoruz.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/mobil.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Mobil Uygulama Geliştirme
                        </h5>
                    </a>
                    <p className="antialiased bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm  ">
                    Mobil uygulama geliştirme hizmetlerimiz, işletmelerin mobil platformlarda büyümesini sağlar. iOS ve Android için kullanıcı dostu ve işlevsel uygulamalar geliştiriyoruz. Her aşamada sizinle işbirliği yaparak, projenizin gereksinimlerini karşılayan mükemmel bir mobil deneyim sunuyoruz.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/masaustu.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Masaüstü Uygulama Geliştirme
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm  ">
                    Masaüstü uygulama geliştirme uzmanlarımız, işletmenizin masaüstü yazılım ihtiyaçlarını karşılamak için özelleştirilmiş çözümler sunuyor. İş süreçlerinizi optimize edin, verilerinizi güvende tutun ve işinizi daha verimli hale getirin. Her bir masaüstü uygulama projemiz, işinizin benzersiz gereksinimlerine mükemmel bir şekilde uyar.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/otomasyon.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        ERP ve Otomasyon Sistemleri
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm  ">
                    Kurumsal Kaynak Planlama (ERP) yazılımı ve iş süreçleri otomasyonu, işletmenizin verimliliğini artırmak ve operasyonları daha iyi yönetmek için kritik öneme sahiptir. ERP sistemleri ve otomasyon çözümleri konusundaki uzmanlığımız, işletmenizin tüm yönlerini bir araya getirmenize yardımcı olacaktır. Projenizi bize teslim edin ve iş süreçlerinizi optimize etmeye başlayın.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/3dmodel.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        3 Boyutlu Tasarım ve Baskı
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    3D tasarım ve baskı alanında sunduğumuz hizmetler, yaratıcı projelerinizi hayata geçirmenize yardımcı oluyor. Prototiplerden nihai ürünlere kadar, en son 3D teknolojileri kullanarak tasarımlarınızı gerçeğe dönüştürüyoruz. İşte bu yolla, inovasyon ve ürün geliştirme projelerinizi hızlandırıyoruz.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/pcb2.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Elektronik ve PCB Tasarım
                        </h5>
                    </a>
                    <p className="antialiased bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm">
                    Müşterilerimize benzersiz ve özelleştirilmiş elektronik çözümler sunuyoruz. Elektronik devrelerin ve PCB'lerin tasarımı, üretimi ve testi konusundaki geniş deneyimimiz, projenizin başarısını garanti eder. Teknik bilgimiz ve mühendislik yeteneklerimiz sayesinde, en karmaşık projeleri bile eksiksiz bir şekilde ele alabiliriz.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/danismanlik.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Destek ve Danışmanlık
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    Teknik desteğe ve uzman görüşlere ihtiyaç duyduğunuzda, yanınızdayız. Projelerinizde size danışmanlık yaparak sorunları çözmenize yardımcı oluyoruz. Uzmanlarımız, teknoloji ve mühendislik alanlarında size yardımcı olacak. İşletmenizin ihtiyaçlarına göre özelleştirilmiş çözümler sunarak, mevcut sorunları çözmenize ve gelecekteki başarılarınızı planlamanıza yardımcı oluyoruz.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/egitim.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Eğitim
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    Teknoloji dünyasındaki en son gelişmeleri takip etmek ve ekibinizi güçlendirmek istiyorsanız, eğitim hizmetlerimiz size uygun olabilir. Seminerler, atölye çalışmaları ve kurslarla, çalışanlarınızın veya öğrencilerinizin bilgi ve becerilerini artırın.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/ai.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Yapay Zeka
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    Verilerinizi anlamak ve işletmenizde daha akıllı kararlar almak için yapay zeka ve veri analitiği çözümlerimiz size yardımcı olabilir. Makine öğrenimi ve derin öğrenme tabanlı uygulamalarımız, verilerinizin gücünü ortaya çıkarır.</p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/iot.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        IoT ve Akıllı Ev Sistemleri
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    İnternet of Things (IoT) cihazları, her gün daha fazla işletme ve ev tarafından benimsenen önemli bir teknoloji trendidir. IoT cihazları, nesnelerin interneti aracılığıyla cihazlar, sensörler ve sistemler arasında veri alışverişi yaparak iş süreçlerinizi ve günlük yaşamınızı daha verimli ve akıllı hale getirir. Akıllı ev sistemleri ile geleceğin teknolojisini ve yaşam tarzını bugünden yaşama fırsatı sunuyoruz. 
                    </p>
                </div>
            </div>
        </div>
        <div className="relative bg-gradient-to-tl from-my-mavi via-my-ortamavi to-my-141414 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-xl object-cover h-64 w-100" src="/images/harita.webp" loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5 className="tracking-wide text-md md:text-xl xl:text-2xl font-extrabold text-center text-my-beyaz ">
                        Veri Haritalandırma ve Görselleştirme
                        </h5>
                    </a>
                    <p className="antialiased  bg-my-siyah p-3 rounded-xl text-white font-light text-xs xl:text-sm ">
                    Veri görselleştirme ve haritalandırma, bu analiz sonuçlarını grafikler, haritalar ve görsel öğelerle sunma sürecini ifade eder. Bu, karmaşık veri setlerini anlamak için son derece etkili bir yöntemdir. Verilerinizi coğrafi haritalara yerleştirmek, veri ilişkilerini daha iyi anlamanıza yardımcı olur ve stratejik kararlar almanıza olanak tanır.
                    </p>
                </div>
            </div>
        </div>
      </div>
             <Footer />
    </>
}