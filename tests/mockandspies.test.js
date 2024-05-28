// test('mock implementation of a basic function', () => {
//     const mock = jest.fn(x => 42 + x);
//     expect(mock(1)).toBe(43)
//     expect(mock).toHaveBeenCalledWith(1)
// })

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true
        }
    };

    const spy = jest.spyOn(video, 'play')
    video.play();

    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
})