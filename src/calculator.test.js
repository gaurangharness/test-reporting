const mathOpes = require('./calculator.js');

test("adds two numbers", () => {
    const val = mathOpes.sum(3,4)

    //assert 
    expect(val).toBe(7)
})


// test("adds two numbers to get failure response", () => {
//     const val = mathOpes.sum(3,4)

//     //assert 
//     expect(val).toBe(8)
// })

