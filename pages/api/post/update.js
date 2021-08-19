
import mp from '@models/post.js'

export default async function handler(req, res) {
    if (req.method !== "PUT") return res.status(405).json({ message: "Method not allowed" }).end();

    try {
        await mp.updatePost(req.body)
        res.status(200).json(
            {
                message: "Updated Post Data Succesfully",
            }
        )
    } catch (e) {

        res.status(502).json(
            {
                message: "Updated Post Data Unsuccesfully",
            }
        )
    }
}
