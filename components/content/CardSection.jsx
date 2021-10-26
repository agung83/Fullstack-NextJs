import Image from "next/image"

import { PeraturanImg, BerkasImg, JalurImg, RegistrasiImg } from '../../assets'

export default function CardSection() {
    return (
        <div>
            <section className="bg-white mb-5 rounded-3xl dark:bg-gray-800">
                <div className="max-w-7xl  mx-auto lg:px-8">
                    <div className="lg:text-center text-center ">
                        <p className="mt-2 text-2xl leading-5 font-extrabold tracking-tight text-blue-500  sm:text-4xl dark:text-white">
                            Panduan Seputar PPDB Online
                        </p>
                        <p className="mt-4 mb-5 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-white">
                            Mari Kita Pahami Dulu Peraturan-Peraturan PPDB ONLINE , dengan membaca panduan PPDB yang ada di bawah ini
                        </p>
                    </div>
                    <div className="grid grid-cols-1  md:grid-cols-4 gap-0  md:gap-12">
                        <div>
                            <div className="relative sm:mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl hover:shadow-none dark:from-gray-600 dark:to-gray-700"></div>
                                <div className=" relative max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 dark:bg-gray-700">
                                    <div className="flex justify-center md:justify-end -mt-16">

                                        <Image width={80} height={78} className="w-20 h-20 object-cover rounded-full  border-indigo-500" src={PeraturanImg} alt="web designer" placeholder="blur" />
                                    </div>
                                    <div>
                                        <h2 className="text-gray-800 dark:text-white text-2xl font-semibold">Peraturan & Persyaratan</h2>
                                        <p className="mt-2 text-gray-600 dark:text-white">menentukan pilihan jalur dan sekolah yang kamu pilih, sesuai dengan aturan yang ada!</p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-xl font-medium text-indigo-500">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative sm:mx-auto ">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl dark:from-gray-600 dark:to-gray-700"></div>
                                <div className=" relative max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 dark:bg-gray-700">
                                    <div className="flex justify-center md:justify-end -mt-16">
                                        <Image width={80} height={78} className="w-20 h-20 object-cover rounded-full  border-indigo-500" src={JalurImg} alt="web designer" placeholder="blur" />
                                    </div>
                                    <div>
                                        <h2 className="text-gray-800 text-xl font-semibold dark:text-white">Pemilihan Jalur</h2>
                                        <p className="mt-2 text-gray-600 dark:text-white">Memahami aturan dan syarat apa saja yang ada pada setiap jalur PPDB, dan memudahkan peserta</p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-xl font-medium text-indigo-500">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative sm:mx-auto ">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl rounded-3xl dark:from-gray-600 dark:to-gray-700"></div>
                                <div className=" relative max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 dark:bg-gray-700">
                                    <div className="flex justify-center md:justify-end -mt-16">
                                        <Image width={80} height={78} className="w-20 h-20 object-cover rounded-full  border-indigo-500" src={RegistrasiImg} alt="web designer" placeholder="blur" />
                                    </div>
                                    <div>
                                        <h2 className="text-gray-800 text-xl font-semibold dark:text-white">Registrasi & Login</h2>
                                        <p className="mt-2 text-gray-600 dark:text-white">Memudahkan kamu untuk memahami alur registrasi / pendaftaran, dengan ketentuan yang ada</p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-xl font-medium text-indigo-500">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative sm:mx-auto ">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl dark:from-gray-600 dark:to-gray-700"></div>
                                <div className=" relative max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 dark:bg-gray-700">
                                    <div className="flex justify-center md:justify-end -mt-16">
                                        <Image width={80} height={78} className="w-20 h-20 object-cover rounded-full  border-indigo-500" src={BerkasImg} alt="web designer" placeholder="blur" />
                                    </div>
                                    <div>
                                        <h2 className="text-gray-800 text-xl font-semibold dark:text-white">Berkas Pokok</h2>
                                        <p className="mt-2 text-gray-600 dark:text-white">Dokumen apa saja yang akan diperlukan ketika mengentrikan data pokok peserta didik bar</p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <a href="#" className="text-xl font-medium text-indigo-500">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}
