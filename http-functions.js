var https = require("https");

module.exports = function getHTML (options, callback) {

  var text = ''
  https.get(options, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      text += data
      callback(text)
    })
  })
}
