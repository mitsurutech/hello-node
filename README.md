# Hello World Node.js app: deploy a Node web app from GitHub

A hello-world Node.js web app. Deploy it free from its GitHub address with the MitsuruTech
[deploy a web app from GitHub](https://mitsurutech.co.uk/apps) feature: no account, nothing to
install. It is small enough to be a first test of deploying to `learntools.dev`, and the steps
are in the manual's [guide to deploying Python, Node, Go and Java apps from GitHub](https://mitsurutech.co.uk/help/deploy-app).

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

## About

Made by [Mitsuru Technologies](https://mitsurutech.co.uk) for the
[MitsuruTech Learning Platform](https://mitsurutech.co.uk/learning): Python, Java, Go, Node, SQL and
Linux in the browser for schools and colleges, with container labs, web apps deployed from GitHub, and
quizzes that mark themselves. Try code with no account in the
[playground](https://mitsurutech.co.uk/playground).
