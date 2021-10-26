
import mu from '../../../models/users'

export default async function handler(req, res) {

    if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" }).end();

    try {
        const responseDb = await mu.getAllUsers()
        res.status(200).json(
            {
                response: true,
                message: "All Users Data Succesfully",
                result: responseDb.data
            }
        )
    } catch (e) {

        res.status(502).json(
            {
                response: false,
                message: "All users Data Unsuccesfully",
                result: []
            }
        )
    }
}
