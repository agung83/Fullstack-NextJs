
export default function tableData({ pecah }) {
    return (

        <tr>
            <th scope="row">1</th>
            <td>{pecah.id}</td>
            <td>{pecah.title}</td>
            <td>{pecah.body}</td>
        </tr>
    )
}
