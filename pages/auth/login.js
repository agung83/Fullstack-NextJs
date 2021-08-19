import Layout from "../../components/Layout";


export default function login() {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="box bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-8/12">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 outline-none" id="password" type="password" placeholder="******************" />
                        <p className="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded" >
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
