import Layout from "components/Layout"
import Image from "next/image"


const columns = [
    {

        head: 'No',
        className: 'p-3 text-left'
    },
    {

        head: 'Sekolah',
        className: 'p-3 text-left'
    },
    {

        head: 'Alamat',
        className: 'p-3 text-left'
    },
    {
        head: 'Zonasi',
        className: 'p-3 text-left'
    }
]

const data = [
    { 'id': 1, 'sekolah': 'SMA NEGERI 2 SIKAKAP', 'alamat': 'Jln. Trans Taikako, Taikako, Sikakap, Kepulauan Mentawai, Sumatera Barat', 'zonasi': '<div style="background-color : red; border-radius : 10px"> tidak ada zonasi</div> ' },


]


export default function sekolah() {
    return (
        <Layout title="Sekolah">
            <div className="container bg-white mt-10 px-4 py-4 rounded-lg border-blue-200">


                <div className="box border-t-2  px-10 py-10 md:px-20 lg:px-20 bg-white  border-yellow-200  dark:bg-gray-800 rounded-xl shadow-lg">

                    <div className="flex justify-between mb-2">
                        <div className=""><p className="text-sm md:text-xl lg:text-xl">SMA NEGERI 1 PADANG</p></div>
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>    </div>
                    </div>
                    <p className="text-sm md:text-lg lg:text-lg"> Jln. Trans Taikako, Taikako, Sikakap, Kepulauan Mentawai, Sumatera Barat</p>

                    <div className="mt-3 flex items-center">
                        <div><p className="text-lg ">Zonasi  </p></div>
                        <div>:</div>
                        <div><p className="text-lg text-center"> <span className="bg-red-400"> tidak ada zonasi</span>
                        </p></div>
                    </div>
                    <div className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugit. Illo accusamus nulla placeat sequi, eligendi libero nisi dolores officia, nemo eaque consequuntur architecto. Ratione odio possimus officiis magni totam.
                    </div>


                </div>


            </div>
        </Layout>
    )
}
