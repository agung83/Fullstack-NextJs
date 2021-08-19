import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PropTypes from 'prop-types'


TableData.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    time: PropTypes.string,
}


TableData.defaultProps = {
    time: 'Fill Time Here'
}

export default function TableData({ columns, data, time }) {

    return (

        <div>
            <h1>{time}</h1>
            <Table className="border border-gray-300">
                <Thead className="border border-gray-300">
                    <Tr>
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
                                <Tr key={index}>
                                    {
                                        Object.keys(data[index]).map((value, key) => {
                                            return (
                                                <Td key={key} className="border-2 p-3 "  >{data[index][value]}</Td>
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





