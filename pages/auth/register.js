import Layout from "../../components/Layout";


export default function register() {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="py-12 px-12 box bg-blue-100 rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Registrasi</h1>
                        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Ayo Registrasikan Akun mu</p>
                    </div>
                    <div className="space-y-4">
                        <input type="text" placeholder="Email Addres" className=" text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                        <input type="text" placeholder="Password" className="text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div className="text-center mt-6">
                        <button className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Registrasi</button>

                    </div>
                </div>

            </div>
        </Layout>
    )
}
