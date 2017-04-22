module.exports = (app)=>{
  let index = require('../controllers/index.server.controller');
  app.get('/', index.render);
}
