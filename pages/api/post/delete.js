
import mp from '@models/post.js'

export default async function handler(req, res) {
    if (req.method !== "DELETE") return res.status(405).json({ message: "Method not allowed" }).end();

    try {
        const response = await mp.deletePost(req.body)
        let report = response == 0 ? 'Data Tidak Ditemukan' : 'Data Berhasil Dihapus'
        res.status(200).json(
            {
                message: "Response Deleted Post Data Succesfully",
                report
            }
        )
    } catch (e) {

        res.status(502).json(
            {
                message: "Deleted Post Data Unsuccesfully",
            }
        )
    }
}
