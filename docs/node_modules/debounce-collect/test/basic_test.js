describe('debounce()', function () {
  var debounce = require('../index')

  it('works', function (next) {
    function myFunction (argsList) {
      expect(argsList).toEqual([ [1, 'one'], [2, 'two'] ])
      next()
    }

    var debounced = debounce(myFunction, 20)
    debounced(1, 'one')
    debounced(2, 'two')
  })
})
