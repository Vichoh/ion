  const User = require('./src/models/user');


  var coap        = require('coap')
    , server  = coap.createServer()


server.on('request', function(req, res) {

  console.log(req.url.split('/')[1] + '\n');
    const userData = {
      id: null,
      username: req.url.split('/')[1] + '\n',
      password: '123123',
      email: '123123',
      created_at: null,
      updated_at: null
    };

      User.insertUser(userData, (err, data) => {
      if (data && data.insertId) {
        console.log(data);
      } else {
        console.log('error');
      }
    });
  
})

server.listen(function() {
  console.log('server started')
})


