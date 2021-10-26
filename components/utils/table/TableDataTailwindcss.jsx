
import PropTypes from 'prop-types'


TableData.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
}


TableData.defaultProps = {
    title: 'Fill Title Here'
}

export default function TableData({ columns, data, title }) {

    return (
        <div>
            <h1>{title}</h1>
            <table className="w-full flex flex-row flex-no-wrap sm:bg-red rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">


                    <tr className="bg-gray-300 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                        {
                            columns.map((pecah, index) => {
                                return (
                                    <th key={index} className={pecah.className}>{pecah.head}</th>
                                )
                            })}
                    </tr>



                </thead>
                <tbody className="flex-1 sm:flex-none">
                    {
                        data.map((pecah, index) => {
                            return (

                                <tr key={index} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    {
                                        Object.keys(data[index]).map((value, key) => {
                                            return (
                                                <td key={key} className="border-grey-light border text-center hover:bg-gray-100 p-3"> <div dangerouslySetInnerHTML={{ __html: data[index][value] }}></div> </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}





