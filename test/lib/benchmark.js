
module.exports = function(size) {

  var self = { tags: [] }

  self.run = function() {
    if (!size) return

    console.info(`Speed with ${size} runs`)
    var total = 0

    self.tags.forEach(function(tag) {
      var start = Date.now(),
        fn = tag.bench || tag.update,
        name = tag.name,
        spaces = ' '.repeat(20 - name.length)

      for (var i = 0; i < size; i++) fn()
      var time = Date.now() - start
      console.info(`   ${ name }${spaces} ${ time }ms`)
      total += time
    })

    console.info(`\nTotal ${ total }ms`)
  }

  return self

}