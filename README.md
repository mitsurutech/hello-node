# hello-node

A hello-world Node app, small enough to be a first test of deploying to `learntools.dev`.

    Language        Node
    Build           npm ci
    Start           npm start

Those are the platform's defaults; nothing here needs changing.

Two things worth copying into your own project:

- **Read `process.env.PORT`.** The platform picks the port and tells you; a server on its
  own favourite port answers nothing.
- **Bind `0.0.0.0`, not `localhost`.** The proxy reaches your app from outside its
  container.

**`package-lock.json` is committed and has to be**, even with no dependencies. `npm ci`
refuses to run without one: *"can only install with an existing package-lock.json"*. So a
project that has never run `npm install` fails to build with a message about lockfiles rather
than about anything you wrote. Generate one with `npm install` and commit it.

## Running it yourself

    npm start
