import React, { memo, useCallback, useEffect, useMemo, useState } from "react"
import Layout from "components/Layout"
import TableData from "components/utils/table/TableData"
import Pagination from 'components/utils/pagination/Pagination'


const columns = [
    {

        head: 'No',
        className: 'p-3 border text-center'
    },
    {

        head: 'Sekolah',
        className: 'p-3 border text-center'
    },
    {

        head: 'Alamat',
        className: 'p-3 border text-center'
    },
    {
        head: 'Zonasi',
        className: 'p-3 border text-center'
    }

]



const Sekolah = () => {
    // console.log('render sekolah')
    const [Datasekolah, setData] = useState([]);
    const [Page, setPage] = useState(1)
    const [Totalpages, setTotalPages] = useState(0);



    useEffect(() => {
        const GetData = async () => {
            try {
                const formdata = new FormData()
                formdata.append('page', Page)
                const res = await fetch(`https://ppdb.sumbarprov.go.id/api/ppdbdata/services/get_sekolah`, {
                    method: "POST",
                    body: formdata
                })
                const data = await res.json()
                let emptyArray = [];
                data.result.forEach((element) => {

                    let dataCustome = {
                        no: element.no,
                        nama_sekolah: element.nama_sekolah,
                        alamat: element.alamat,
                        zonasi: 'tidak ada zonasi'
                    }

                    emptyArray.push(dataCustome)

                });
                setTotalPages(data.total_pages)
                setData(emptyArray)
                return true

            } catch (e) {
                console.log(e)
            }
        }

        GetData();
    }, [Page])



    // const Table = useMemo(() => TableData, [])

    const Nextpaginate = useCallback((pageNumber) => setPage(pageNumber), [])

    //apa perbedaan fungsi di atas dengan di bawah bukan nya sama saja, perbedaan nya adalah ketika kita mengunakan useCallBack bawaan hook maka componenst paginatio tidak akan di render ulang

    //change page
    // const Nextpaginate = pageNumber => {
    //     setPage(pageNumber)
    // }

    const ShowAlert = useCallback((id) => setPage(id), [])


    // const ShowAlert = id => {
    //     alert(id)
    //     console.log(id)
    // }

    return (
        <Layout title="Sekolah">
            <div className="container bg-white mt-10 px-4 py-4 rounded-lg border-blue-200">
                <TableData
                    columns={columns}
                    data={Datasekolah}
                    title="Data Sekolah"
                    ShowAlert={ShowAlert}
                />

                <Pagination
                    totalPages={Totalpages}
                    paginate={Nextpaginate}
                    Page={Page}
                />
            </div>
        </Layout>
    )
}


export default Sekolah