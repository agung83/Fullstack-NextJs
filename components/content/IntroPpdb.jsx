
import Image from "next/image"
import { IntroppdbImg } from '../../assets'

export default function Introppdb() {
    return (
        <section className="rounded-md  p-1 mb-10 ">

            <div className="mx-auto my-5 pt-2 md:pt-0 md:flex lg:flex bg-blue-100 dark:bg-gray-900">
                <div className="md:container lg:container order-2 md:order-1 mb-6 p-5 flex items-center -mt-6 md:mt-0">


                    <div className="relative sm:mx-auto ">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-gray-600 dark:to-gray-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 rounded-3xl md:rounded-3xl hover:shadow-none"></div>
                        <div className="relative p-5 md:pr-18 md:pl-14 md:py-12  md:mx-0 h-full bg-white rounded-lg md:rounded-3xl  md:shadow-lg dark:bg-gray-800">
                            <h3 className="font-bold text-3xl text-blue-500 mb-2 dark:text-white">PPDB SUMATERA BARAT</h3>
                            <p className="text-gray-600 sm:text-left lg:text-justify leading-8 dark:text-white">pendidikan merupakan salah satu upaya yang harus diselenggarakan oleh Pemerintah Daerah dalam rangka mencerdaskan masyarakat di daerah, sebagai salah satu bagian dari penyelenggaraan pendidikan perlu adanya penerimaan peserta didik baru yang terintegrasi dan komprehensif serta sesuai dengan kondisi daerah.</p>
                            <a className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                                <span>Conocer más de Amanee</span>
                                <span className="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>


                    </div>

                </div>
                <div className="mt-1 mr-10">
                    <Image width={550} height={450} className="w-64 h-64 max-w-md mx-auto" src={IntroppdbImg} alt="web designer" placeholder="blur" objectFit="contain" />
                </div>
            </div>
        </section >
    )
}
