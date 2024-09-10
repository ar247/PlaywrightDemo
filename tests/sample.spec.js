const {test,expect} = require('@playwright/test')
const { exec } = require('child_process')

test('My first Test Case', async function({page}){
     expect(12).toBe(12)
})

test('My Second Test Case', async function({page}){ 
     expect(14).toBe(123)
})

test.skip('My Third Test Case', async function({page}){
    expect(14).toBe(14)
})

test("My fourth Test Case", async function({page}){
    expect('my name is anant raj'.includes('anant raj')).toBeTruthy()
})