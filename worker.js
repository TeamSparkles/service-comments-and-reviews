var fs = require('fs');
var request = require('request');

fs.readFile('eventData.json', 'utf-8', (err, data) => {
  var eventData = JSON.parse(data).events;
  var linkArr = [];

  for (var i = 0; i < eventData.length; i++) {
    linkArr.push({
      id: eventData[i].id,
      link: eventData[i].link,
    });
  }

  for (var i = 0; i < linkArr.length; i++) {
    linkArr[i].link = 'http://api.meetup.com' + linkArr[i].link.slice(22) + 'comments';
  }

  var resultArr = [];
  for (var i = 0; i < linkArr.length; i++) {
    (function (tempId) {
      request(linkArr[i].link, function (error, response, body) {
        resultArr.push({
          id: tempId,
          comments: JSON.parse(body)
        });
      });
    })(eventData[i].id);
  }

  setTimeout(() => {
    console.log('Writing file...');
    fs.writeFile('commentsData.json', JSON.stringify(resultArr), (error) => {
      if (error) {
        throw error;
      } else {
        console.log('Writiing file has completed.');
      }
    });
  }, 5000);
});