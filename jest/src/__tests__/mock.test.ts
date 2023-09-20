const  itemFunc = (items:number[], callback: (arg:number) => void) => {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}


it("mock callback", () => {
    const mockCallback = jest.fn((x) => 54 + x) 

    //invoke the function
    itemFunc([0,1], mockCallback);

    // How many time is this function called
    //call returns an array of all the calls
    expect(mockCallback.mock.calls.length).toBe(2)

    //or
    expect(mockCallback).toHaveBeenCalledTimes(2)

    expect(mockCallback.mock.results[0].value).toBe(54)

    expect(mockCallback.mock.results[1].value).toBe(55)


})


