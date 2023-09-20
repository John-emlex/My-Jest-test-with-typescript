import exp from 'constants';
import type * as TestFunc from '../index'
import { match } from 'assert';

const { sum } = jest.requireActual< typeof TestFunc >("/Users/mac/Desktop/Node/My-Jest-test-with-typescript/jest/src/index.ts")

//example of a test 1

//Tst case  and Test Suite

// AAA (Arrange, Act, Assert)

test("Should add 4 + 6 to equal 10", () => {
    //Arrange
    const a = 4;
    const b = 6;

    //Act
    const result = sum(a, b);

    //Assert
    expect(result).toBe(10);
})


//Jest matchers

//Equality jest matchers -toBe, toEqual(), not.toBe(), not.toEqual(), toStrictEqual, toBeCloseTo, toBeDefined, toBeUndefined, toBeNull, toBeTruthy, toBeFalsy

//test suite
describe("Equality Matchers", () => {
 test('Testing toBe and not.toBe()', () => {
    expect(2 * 2).toBe(4)
    expect(4 - 2).not.toBe(1)
 })

 test('Object assignment', () => {
     const data = {}
    
     //expect(data).toBe({})//false and test will fail
     // reason line 38 won't work is because toBe() uses(i.e is use on primitive datatypes) Object.is to test exact equality.
     //If you want to check the value of an object(reference datatype), use toEqual() instead.
     expect(data).toEqual({})//true
 })
})


//Truthiness
describe('"truthy operators"', () =>    {
const name = "Software testing lecture"
const n = null
expect(n).toBeNull()

expect(name).toBeTruthy()


expect(0).toBeFalsy()
})

// Numbers matchers - toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeCloseTogreaterThan, toBeCloseToLessThan, toBeCloseToLessThanOrEqual, toBeCloseToGreaterThan

describe("Number Matchers", () => {
    test("numeric matchers", () => {
        let num1 = 100;
        let num2 = -20;
        let num3 = 0;
        let num4 = 4 + 4;

        //greater than

        expect(num1).toBeGreaterThan(num2)    

        //less than or equal
        
        expect(num2).toBeLessThanOrEqual(0)

        expect(num3).toBeLessThanOrEqual(7)

})
    it("adding float", () => {
        let value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.29999)
    })

})


// String matches

describe("String Matchers", () => { 
    test("String matchers", () => {
        let string = "Software testing lecture"

        expect(string).toMatch('tes')

    })
})

// Array Matchers


describe("Array Matchers", () => {
    const shoppingList = [
        'diapers', 'cake', 'milk', 'chocolate'
    ]
    it('check if shopping list his part of th array', () => {
        expect (shoppingList).toContain('milk')
    })

})

// Exceptions Matchers

function errorHandler(): void {
    throw new Error("Something went wrong")
}

describe("Exception Matchers", () => {
    it("handle Error", () => {
        expect(errorHandler).toThrow(Error)
    })
})

// Example
const successCases = [
   {
    id: 0,
    input: {a: 1, b: 2},
    result: 3
   },
   {
    id: 1,
    input: {a: 4, b: 2},
    result: 6
   },
   {
    id: 2,
    input: {a: 9, b: 21},
    result: 30
   },
   {
    id: 3,
    input: {a: 7, b: 4},
    result: 11
   },
]

describe("Test sum func", () => {
    it.each(successCases)("Success Cases", ({input, result}) => {
        const {a, b} = input

        expect(sum(a, b)).toBe(result)
    })
})

// Async Matchers