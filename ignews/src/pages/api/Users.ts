import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Luís'},
        { id: 2, name: 'Felipe'},
        { id: 3, name: 'GuGu'},
    ]

    return response.json(users)
}