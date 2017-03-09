### Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/josephluck/vanilla-experiments.svg)](https://greenkeeper.io/)

Some vanilla javascript experiments using TheMovieDb. This was a very quick and simple test to see how Vanilla javascript can be used to create a searchable list of films reading from a server.

### Installation

Ensure the latest Node and NPM are available on your machine

```bash
npm install
```

### Testing

```bash
npm test
```

### Running

```bash
npm start
```

Follow the instructions in your terminal after running this command.

### Features not yet implemented

- More extensive testing of events and user-interactions
- Infinite scroll to load more results when the user reaches the bottom of the list
- More search options, clicking through to view a film etc...

### Performance considerations not yet implemented

- Scroll 'windowing' so that only the DOM elements in view are rendered
- Virtual DOM diffing so that rendering is performant when searching
- Cancelling concurrent unresolved HTTP requests to reduce data usage (useful on mobile 3g connections)
- Streaming the response so that movies are rendered in the list as they are downloaded from the server (rather than after the entire response is finished)

### Styling

- Real basic styling done, really nothing to be proud of ;)

