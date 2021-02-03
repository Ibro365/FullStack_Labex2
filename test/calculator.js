var calculator = require("../app/calculator");
var assert = require("chai").assert;

describe("add", () =>{
    function makeTest(i, j) {
        let expectedPass = i + j;
        let expectedFail = i + j + 1;

        it(`add(${i},${j}) expected result ${expectedPass} PASS`, () => {
            assert.equal(calculator.add(5, 2), expectedPass);
        })

        it(`add(${i},${j}) expected result ${expectedFail} FAIL`, () => {
            assert.equal(calculator.add(5, 2), expectedFail);
        })
    }

    let i = 5
    let j = 2
    makeTest(i, j);
})

describe("sub", () =>{
    function makeTest(i, j) {
        let expectedPass = i - j;
        let expectedFail = i - j + 2;

        it(`sub(${i},${j}) expected result ${expectedPass} PASS`, () => {
            assert.equal(calculator.sub(5, 2), expectedPass);
        })

        it(`add(${i},${j}) expected result ${expectedFail} FAIL`, () => {
            assert.equal(calculator.sub(5, 2), expectedFail);
        })
    }

    let i = 5
    let j = 2
    makeTest(i, j);
})

describe("mul", () =>{
    function makeTest(i, j) {
        let expectedPass = i * j;
        let expectedFail = i * j + 2;

        it(`mul(${i},${j}) expected result ${expectedPass} PASS`, () => {
            assert.equal(calculator.mul(5, 2), expectedPass);
        })

        it(`mul(${i},${j}) expected result ${expectedFail} FAIL`, () => {
            assert.equal(calculator.mul(5, 2), expectedFail);
        })
    }

    let i = 5
    let j = 2
    makeTest(i, j);
})

describe("div", () =>{
    function makeTest(i, j) {
        let expectedPass = i / j;
        let expectedFail = i / j - 3;

        it(`div(${i},${j}) expected result ${expectedPass} PASS`, () => {
            assert.equal(calculator.div(10, 2), expectedPass);
        })

        it(`div(${i},${j}) expected result ${expectedFail} FAIL`, () => {
            assert.equal(calculator.div(10, 2), expectedFail);
        })
    }

    let i = 10
    let j = 2
    makeTest(i, j);
})
