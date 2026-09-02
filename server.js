// A hello-world Node app for learntools.dev.
//
// The one rule this platform asks: listen on the port it gives you. `process.env.PORT` is
// set when it is deployed; 3000 is only for running it on your own machine.
import { createServer } from 'node:http';

const port = Number(process.env.PORT ?? 3000);

const server = createServer((request, response) => {
  if (request.url === '/healthz') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ ok: true }));
    return;
  }
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(
    `<h1>Hello from Node</h1><p>Serving on port ${port}.</p>`
    + '<p>Written by a student, hosted for an hour.</p>',
  );
});

// **0.0.0.0 and not localhost.** The proxy reaches this from outside the container, so a
// server bound to the loopback answers nothing and looks like a broken deployment.
server.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
