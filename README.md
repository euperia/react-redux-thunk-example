# React + Redux + Thunk REST API Example

This application provides an example of using React and Redux with an external API.

The API in the demo is provided by [JSON Server](https://github.com/typicode/json-server).

## Installation and setup

Clone the repository and run `npm install`.

Open a second terminal and `cd` to the repository, then run the following to start the JSON server:

```bash
npx json-server data/db.json
```

```bash
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching data/db.json...

(˶ᵔ ᵕ ᵔ˶)

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/user
```

Switch over to the first terminal and run the application:

```bash
npm run dev
```

```
> react-redux-thunk@0.0.0 dev
> vite

Re-optimizing dependencies because lockfile has changed

  VITE v5.3.3  ready in 130 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```