const express = require('express'); 
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

/** serving static files to DOM in Express */
/** serving React at root directory */
app.use('/', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

/** serving json data at this route */
app.get('/events/:event_id/comments', function(req, res) {
  var eventID = req.params.event_id;
  //console.log(req.params.event_id);
  console.log(req.body);

  db.getSingleComment(eventID, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.json(result);
    }
  })
  
});

app.listen(port, () => {
  console.log('listening to port ' + port); 
});