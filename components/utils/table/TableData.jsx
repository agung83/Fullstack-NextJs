import { memo } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PropTypes from 'prop-types'


const TableData = ({ columns, data, title, ShowAlert }) => {
    console.table('render table data')
    return (
        <div>
            <h1>{title}</h1>
            <Table className="border border-gray-300 mb-5">
                <Thead className="border border-gray-300">
                    <Tr className="border">
                        {
                            columns.map((pecah, index) => {
                                return (
                                    <Th key={index} className={pecah.className}>{pecah.head}</Th>
                                )
                            })}
                    </Tr>
                </Thead>
                <Tbody className="border">
                    {
                        data.map((pecah, index) => {
                            return (
                                <Tr key={index} className="hover:bg-gray-100">
                                    {
                                        Object.keys(data[index]).map((value, key) => {

                                            return (
                                                <Td key={key} className="border-2 p-5">
                                                    {/* {data[index][value]} */}
                                                    {
                                                        value == 'zonasi' ?
                                                            <>
                                                                <a onClick={() => ShowAlert(data[index].no)} className="bg-red-800 rounded-xl text-white px-2 py-2">Zonasi</a>
                                                                <a onClick={() => ShowAlert(data[index].no)} className="bg-red-800 rounded-xl text-white px-2 py-2">Delete</a>
                                                            </>
                                                            : data[index][value]
                                                    }

                                                </Td>
                                            )
                                        })
                                    }
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </div>
    )
}

TableData.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    time: PropTypes.string,
}


TableData.defaultProps = {
    title: 'Fill Title Here'
}


export default memo(TableData)








