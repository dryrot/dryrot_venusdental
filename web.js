const express = require("express");
const next = require("next");
const approot = require("app-root-path");
console.log('-------------------------------------------');
console.log(approot.path);
console.log('ㅎㅇ13');
const dev = process.env.NODE_ENV !== "production";
// const dev = true;
let payload = {};
if (dev === false) {
  payload = { dev: dev, dir: '/home/hosting_users/dryrot/apps/dryrot_venusdental/' }
}
const app = next(payload);
const handle = app.getRequestHandler();

console.log('ㅎㅇ23');
app
  .prepare()
  .then(() => {
    const server = express();

    // server.get("/p/:id", (req, res) => {
    //   const actualPage = "post";
    //   const queryParams = { title: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/", (req, res) => {
      return app.render(req, res, "/");
    });

    server.listen(8001, (err) => {
      if (err) throw err;
      console.log("NOW LISTENING!!!!!");
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });

