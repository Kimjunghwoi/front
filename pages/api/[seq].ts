import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { seq, email, name },
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
            res.status(200).json({ seq, name: `User ${seq}` })
            break
        case 'PUT':
            // Update or create data in your database
            res.status(200).json({ seq, name: name || `User ${seq}` })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
