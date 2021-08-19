
import Image from "next/image"
export default function Introppdb() {
    return (
        <section id="section2" className="container rounded-3xl shadow-md p-1 mb-10 ">
            <div className="mx-auto my-5 pt-5 md:pt-0 md:flex lg:flex">
                <div className="container order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                    <div className="p-5 md:pr-18 md:pl-14 md:py-12  md:mx-0 h-full bg-white rounded-lg md:rounded-3xl border-t-4 border-yellow-200  md:shadow-lg">
                        <h3 className="font-bold text-3xl text-blue-500 mb-2">PPDB SUMATERA BARAT</h3>
                        <p className="text-gray-600 sm:text-left lg:text-justify leading-8">pendidikan merupakan salah satu upaya yang harus diselenggarakan oleh Pemerintah Daerah dalam rangka mencerdaskan masyarakat di daerah, sebagai salah satu bagian dari penyelenggaraan pendidikan perlu adanya penerimaan peserta didik baru yang terintegrasi dan komprehensif serta sesuai dengan kondisi daerah.</p>
                        <a className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                            <span>Conocer más de Amanee</span>
                            <span className="text-xs ml-1">&#x279c;</span>
                        </a>
                    </div>
                </div>
                <div>
                    <Image width={500} height={300} className="w-64 h-64 max-w-md mx-auto" src="/static/images/website-designer-bro.svg" alt="web designer" objectFit="contain" />
                </div>
            </div>
        </section >
    )
}
