import TableData from "components/tableData"

import Layout from "../components/Layout"





export default function About({ data }) {


    return (
        <Layout title="About nee">
            <div className="mt-2">
                <table className="max-w-5xl mx-auto table-auto">
                    <thead className="justify-between">
                        <tr className="bg-green-600">
                            <th className="px-16 py-2">
                                <span className="text-gray-100 font-semibold">No</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-100 font-semibold">Sekolah</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-100 font-semibold">Alamat</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-100 font-semibold">Zonasi</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {
                            data.map((pecah, key) => {
                                console.log(key)
                                return <TableData pecah={pecah} key={key} />
                            })
                        }


                    </tbody>
                </table>
            </div>

        </Layout>
    )
}

export async function getStaticProps(ctx) {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data }, revalidate: 10 }
}
