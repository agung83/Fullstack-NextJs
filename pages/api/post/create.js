
import mp from '@models/post.js'

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" }).end();

    try {
        await mp.createPost(req.body)
        res.status(200).json(
            {
                message: "Created Post Data Succesfully",
            }
        )
    } catch (e) {

        res.status(502).json(
            {
                message: "Created Post Data Unsuccesfully",
            }
        )
    }
}
