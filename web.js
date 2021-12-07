const express = require("express");
const next = require("next");
const approot = require("app-root-path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("DB SUCCESS");
  })
  .catch(console.log);

console.log(
  "=============================2021 12 07============================="
);

const app = next({ dev: true, dir: approot.path });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get("/", (req, res) => {
      return app.render(req, res, "/");
    });

    server.post("/review/create", async (req, res, next) => {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await db.Review.create({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
          show_yn: req.body.show_yn,
          password: hashedPassword,
        });
        res.send("ok");
      } catch (err) {
        console.error(err);
        next(err);
      }
    });

    server.get("*", (req, res) => {
      return handle(req, res);
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
