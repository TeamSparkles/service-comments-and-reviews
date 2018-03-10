# Youdown(MeetUp): service-comments-and-reviews

This module renders a list of comments and replies posted in a given MeetUp event. 

## Related Project

- https://github.com/TeamSparkles/service-header
- https://github.com/TeamSparkles/service-description
- https://github.com/TeamSparkles/service-attendees
- https://github.com/TeamSparkles/service-suggestions
- https://github.com/TeamSparkles/service-where-when


## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

Run `npm run start` to start this service on 'localhost:3000' and `npm run build` to start webpack. The server will return all the comments and replies associated with the MeetUp event with the id of '241049102'. This event contains two top-level comments and six replies, which is the largest data set in our 107 sample event data. To reference the original webpage of this event on MeetUp, visit https://www.meetup.com/EastBayBookClub/events/241049102/.

Data is stored in MongoDB and follows the exact same schema that MeetUp uses on their website. To request the comments and replies data in JSON for a specific event, run `mongo` and `use meetup` to get the id of each event, then navigate to 'http://localhost:3000/events/event_id/comments'. Data shape can be referenced in `schema.js`. For more information on the POST and DELETE requests of comments and replies, visit https://www.meetup.com/meetup_api/docs/:urlname/events/:event_id/comments/#list.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Webpack 3.11.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm install -g webpack
npm install -g nodemon
```

