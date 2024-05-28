const { fetchData, fetchPromise} = require("./async")

// test('the data is peanut', done => {
//     function callback(data){
//         try {
//             expect(data).toBe('peanut butter')
//             done()
//         } catch (error) {
//             done(error)
//         }
//     }
//     fetchData(callback)
// })

// test('the data is peanut butter', () => {
//     return expect(fetchPromise()).resolves.toBe('peanut butter')
// });

// test('the fetch fails with an error', () => {
//     return expect(fetchPromise()).rejects.toThrow('error')
// })

test('the data is peanut butter', async () => {
    const data = await fetchPromise()
    expect(data).toBe('peanut butter')
})