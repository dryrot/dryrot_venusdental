const express = require("express");
const next = require("next");
const approot = require("app-root-path");
const bodyParser = require("body-parser");

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("DB SUCCESS");
  })
  .catch(console.log);

console.log(
  "=============================2021 12 10============================="
);

const app = next({ dev: false, dir: approot.path });
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
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await db.Review.create({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
          show_yn: req.body.show_yn,
          password: req.body.password,
        });
        res.send("ok");
      } catch (err) {
        console.error(err);
        next(err);
      }
    });

    server.get("/review/list", async (req, res, next) => {
      try {
        await db.Review.findAll({
          attributes: ["title", "author", "content"],
          where: { show_yn: "Y" },
          order: [["create_dt", "DESC"]],
        }).then((data) => {
          console.log(data);
          res.status(200).json(data);
        });
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
