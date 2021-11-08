// const express = require("express");
// const next = require("next");
// const approot = require("app-root-path");
//
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app
//   .prepare()
//   .then(() => {
//     const server = express();
//
//     // server.get("/p/:id", (req, res) => {
//     //   const actualPage = "post";
//     //   const queryParams = { title: req.params.id };
//     //   app.render(req, res, actualPage, queryParams);
//     // });
//
//     server.get("*", (req, res) => {
//       console.log('gogogog!!!')
//       return handle(req, res);
//     });
//
//     server.get("/", (req, res) => {
//       console.log('slash!!!!!!!!!!!!')
//       return app.render(req, res, "/");
//     });
//
//     server.listen(8001, (err) => {
//       if (err) throw err;
//       console.log("NOW LISTENING!!!!!");
//     });
//   })
//   .catch((ex) => {
//     console.log(ex.stack);
//     process.exit(1);
//   });

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

// dotenv.config();

const app = next({ dev }); // next 모듈을 사용
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express(); // back 서버에서의 const app = express()

  // server.use(morgan("dev"));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  // server.use(cookieParser(process.env.COOKIE_SECRET));
  // server.use(
  //   expressSession({
  //     resave: false,
  //     saveUninitialized: false,
  //     secret: process.env.COOKIE_SECRET, // backend 서버와 같은 키를 써야한다.
  //     cookie: {
  //       httpOnly: true,
  //       secure: false,
  //     },
  //   }),
  // );

  // server.get("/hashtag/:tag", (req, res) => {
  //   return app.render(req, res, "/hashtag", { tag: req.params.tag });
  // });
  //
  // server.get("/user/:id", (req, res) => {
  //   return app.render(req, res, "/user", { id: req.params.id });
  // });

  server.get("*", (req, res) => {
    // 모든 get 요청 처리
    console.log(11111111)
    return handle(req, res); // next의 get 요청 처리기
  });

  server.listen(8001, () => {
    console.log(2222222)
    console.log("next+expresss running on port 8001");
  });
});
