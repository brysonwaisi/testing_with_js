// test('object assignment', ()=> {
//   const data = { one: 1}
//   data['two'] = 2;

//   expect(data).toEqual({one: 1, two:2})
// })


// test('null is falsy', () => {
//     const n = null;
//     expect(n).toBeFalsy()
// })

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

// Error handling

// const myFunc = require('./sum')
// test("throws invalid input", () => {
//   expect(() => {
//     myFunc(6)
//   }).toThrow()
// });