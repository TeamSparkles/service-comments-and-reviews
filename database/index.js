const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meetup');

// define schema 
var commmentsSchema = mongoose.Schema({
  id: {
    type: String, 
    unique: true
  },
  comments: [
    {
      id: Number,
      comment: String,
      link: String, 
      created: Number,
      like_count: Number,
      replies: [
        {
          id: Number,
          in_reply_to: Number,
          comment: String,
          link: String,
          created: Number,
          like_count: Number, 
          member: {
            id: Number,
            name: String,
            bio: String, 
            photo: {
              highres_link: String,
              photo_link: String,
              thumb_link: String,
              type: String,
              base_url: String
            },
            role: String,
            event_context: {
              host: Boolean
            }
          } 
        }
      ],
      member: {
        id: Number,
        name: String,
        bio: String, 
        photo: {
          highres_link: String,
          photo_link: String,
          thumb_link: String,
          type: String,
          base_url: String
        },
        role: String,
        event_context: {
          host: Boolean
        }
      }
    }
  ]
});

// define models that can be saved and retrieved from our database
var Comments = mongoose.model('Comments', commmentsSchema);

// retrieve all the data from database
var getData = (callback) => {
  Comments.find(callback);
}

// retrieve all the comments associated with a specific event ID
var getSingleComment = (commentsId, callback) => {
  Comments.findOne({id: commentsId}).exec(callback);
}

module.exports.getData = getData;
module.exports.getSingleComment = getSingleComment; 

