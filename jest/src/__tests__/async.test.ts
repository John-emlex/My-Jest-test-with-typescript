

import type * as AsyncFunc from '../async'

const { fetchData } = jest.requireActual < typeof AsyncFunc > ("../async.ts")

test('return a list of  post by  user', () => {
    const userId = 1;
    return fetchData(userId).then((data) => {
        expect(data.length).toBeGreaterThan(0)
        data.forEach((post: {[key: string]: number | string}) => {
            expect(post).toEqual(expect.objectContaining({userId}))
        })
    })
})
