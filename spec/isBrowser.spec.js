const isBrowser = require('../src/isBrowser')

describe('isBrowser', () => {

  it('should say you are in node when running this test', () => {
    expect(isBrowser()).toBe(false)
  })

})
