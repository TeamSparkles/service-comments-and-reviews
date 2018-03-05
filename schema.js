{
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
}