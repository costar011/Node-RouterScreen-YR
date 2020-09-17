import express from "express";
import path from "path";
import morgan from "morgan";
import ROUTER from "./router/router";

// 3000 이라는 port를 담음
const PORT = 3000;

// app 이라는 변수를 만듬
const app = express();

// view engine 으로 pug를 세팅.
app.set("view engine", "pug");

// morgan을 dev모드로 사용할거야.
app.use(morgan("dev"));

// app.js 에게 CSS나 js는 /assets에 있음
app.use(express.static(path.join(__dirname, "/assets")));

// 사용자가 "/"을 요청하면 res 을 통하여 웹페이지를 응답.
// 하지만 우리는 Router를 사용하기 때문에 간결하게 app.get("/", ROUTER); 이렇게 써도 된다.
app.get("/", ROUTER);
app.get("/page2", ROUTER);

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅ Server Start localhost: ${PORT}`);
});
