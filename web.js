const express = require("express");
const next = require("next");
const approot = require("app-root-path");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "venusdental.co.kr",
  user: "dryrot",
  password: "Dryrot1225!db",
  database: "dryrot",
  port: "3306",
});

connection.connect();

connection.query("SELECT * from REVIEW", (error, rows, fields) => {
  if (error) throw error;
  console.log("REVIEW info is: ", rows);
});

connection.end();

console.log(
  "=============================2021 11 30============================="
);

const app = next({ dev: false, dir: approot.path });
const handle = app.getRequestHandler();

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

    server.get("/Review/review", (req, res) => {
      console.log("--------------------");
      connection.query("SELECT * FROM REVIEW", (error, rows) => {
        if (error) throw error;
        console.log("REVIEW IS ---->", rows);
      });
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
